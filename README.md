## MyChat
#### Description
A Group video calling application using the Agora Web SDK with a Django backend.

#### How to use this source code
##### Clone repo
```  git clone https://github.com/divanov11/mychat ```
##### Install requirements
cd mychat
pip install -r requirements.txt
##### Update Agora credentals
In order to use this project you will need to replace the agora credentials in views.py and streams.js.

Create an account at agora.io and create an app. 
Once you create your app, you will want to copy the appid & appCertificate to update views.py and streams.js. 



###### views.py
```
def getToken(request):
    appId = "YOUR APP ID"
    appCertificate = "YOUR APPS CERTIFICATE"
```
##### streams.js
``` 
const APP_ID = 'YOUR APP ID'
```

##### Start server
``` python manage.py runserver ```

