from django.shortcuts import render
from django.http import JsonResponse
from agora_token_builder import RtcTokenBuilder
import random
import time
import json
from .models import RoomMemberf
def getToken(request):
    appId= 'fb18a820a7f8457498d4895df9b31a69'
    appCertificate = 'cf98ebf7f2a8415eb45408dea12f8455'
    channelName = request.GET.get('channel')
    uid = random.randint(1, 230)
    expirationTimeInSeconds = 3600*24
    currentTimestamp =time.time()
    privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
    role = 1
    token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs)
    print("token here-------",token)
    print("uid",uid)
    print("Channel ",channelName)
    return JsonResponse({'token':token,"uid":uid},safe=False)

def lobby (request):
    return render(request,'base/lobby.html')

def room (request):
    return render(request, 'base/room.html')

def createUser(request):
    data = json.load(request.body)
    return JsonResponse()
