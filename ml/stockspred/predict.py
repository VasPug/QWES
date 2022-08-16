while True: 
    import math
    import pandas_datareader as web
    import numpy as np
    import pandas as pd
    from sklearn.preprocessing import MinMaxScaler
    from keras.models import Sequential
    from keras.layers import Dense, LSTM
    import matplotlib.pyplot as plt
    from datetime import datetime
    plt.style.use('fivethirtyeight')
    
    tickerlist = ['AAPL', 'GOOG', 'GOOGL','FB', 'AMZN', 'TWTR', 'ZM', 'MSFT', 'AMD', 'F', 'GE', 'DIS', 'DAL', 'GPRO', 'BAC', 'SNAP', 'BA', 'UBER', 'NVDA', 'VOO', 'SPY', 'COOP', 'L'] 

    for x in range(len(tickerlist)):
        ticker = tickerlist[x]
        tickerdiff = ticker + "diff"
        tickercolor = ticker + "color"
        date = datetime.today().strftime("%Y-%m-%d")
        date = str(date)
        df = web.DataReader(ticker, data_source='yahoo', start = '2012-01-01', end=date)
        #print(df.shape)
    
        #plot the data (closing prise history)
        plt.figure(figsize=(16,8))
        plt.title('Close Price History')
        plt.plot(df['Close'])
        plt.xlabel('Date', fontsize=18)
        plt.ylabel('Close Price USD ($)', fontsize=18)
        #plt.show()

        data = df.filter(['Close'])
        dataset = data.values
        training_data_len = math.ceil(len(dataset) * .8)

        #print(training_data_len)

        scaler = MinMaxScaler(feature_range=(0,1))
        scaled_data = scaler.fit_transform(dataset)

        #print(scaled_data)

        train_data = scaled_data[0:training_data_len , :]
        x_train = []
        y_train = []

        for i in range(60, len(train_data)):
            x_train.append(train_data[i-60:i, 0])
            y_train.append(train_data[i, 0])
            #if i<=61:
                #print(x_train)
                #print(y_train)
                #print()

        x_train, y_train = np.array(x_train), np.array(y_train)

        x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))
        #print(x_train.shape)

        model = Sequential()
        model.add(LSTM(50, return_sequences=True, input_shape=(x_train.shape[1], 1)))
        model.add(LSTM(50, return_sequences = False))
        model.add(Dense(25))
        model.add(Dense(1))

        model.compile(optimizer='adam', loss='mean_squared_error')

        model.fit(x_train, y_train, batch_size=1, epochs=1)

        test_data = scaled_data[training_data_len - 60: , :]
        x_test = []
        y_test = dataset[training_data_len:, :]
        for i in range(60, len(test_data)):
            x_test.append(test_data[i-60:i, 0])

        x_test = np.array(x_test)

        x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1))

        predictions = model.predict(x_test)
        predictions = scaler.inverse_transform(predictions)

        rmse=np.sqrt(np.mean(((predictions- y_test)**2)))

        #print(rmse)

        train = data[:training_data_len]
        valid = data[training_data_len:]
        valid['Predictions'] = predictions
        #plt.figure(figsize=(16,8))
        #plt.title('Model')
        #plt.xlabel('Date', fontsize=18)
        #plt.ylabel('Close Price USD ($)', fontsize=18)
        #plt.plot(train['Close'])
        #plt.plot(valid[['Close', 'Predictions']])
        #plt.legend(['Train', 'Val', 'Predictions'], loc='lower right')
        #plt.show()

        #print(valid)

        apple_quote = web.DataReader(ticker, data_source='yahoo', start='2012-01-01', end=date)
        new_df = apple_quote.filter(['Close'])
        last_60_days = new_df[-60:].values
        last_60_days_scaled = scaler.transform(last_60_days)
        X_test = []
        X_test.append(last_60_days_scaled)
        X_test = np.array(X_test)
        X_test = np.reshape(X_test, (X_test.shape[0], X_test.shape[1], 1))
        pred_price = model.predict(X_test)
        pred_price = scaler.inverse_transform(pred_price)
        pred = str(pred_price)
        pred1 = float(pred_price)
        pred1 = round(pred1, 2)

        apple_quote2 = web.DataReader(ticker, data_source='yahoo', start = date, end=date)
        data1 = apple_quote2.filter(['Close'])
        hi = pred1 - data1
        hi = hi.values
        hi = hi[0]
        hi = float(hi)
        hi = round(hi, 2)
        if hi < 0:
            color = "danger"
        else:
            color = "success"
        from firebase import firebase
        firebase = firebase.FirebaseApplication("https://facebookchat-f1db0.firebaseio.com/", None)
        data = {
            ticker: pred1,
            tickerdiff: hi,
            tickercolor: color,
        }

        result = firebase.put(ticker, ticker, data)
        print(result)


#apple_quote2 = web.DataReader('AAPL', data_source='yahoo', start='2020-05-19', end='2020-05-19')
#print(apple_quote2['Close'])
