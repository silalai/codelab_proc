from django.shortcuts import render, redirect

# Create your views here.
def list_view(request):
   
    actors = [{"id": '1',"name": 'Rocket falconnine'}, {"id": '2',"name": 'Dragon lowrence'}]
    
    return render(request, "main/home.html",  {'actors': actors})

def client(request):
    factors = [{"id": '1',"name": 'ข้อความที่จะฝากไว้ให้เธอ'}, {"id": '2',"name": '[บอกชื่อเทอกับฉัน]'}]
    
    return render(request, "main/55.html",  {'factors': factors})


