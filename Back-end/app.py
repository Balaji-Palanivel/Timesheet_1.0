from pymongo import MongoClient
from flask import Flask,g
from flask import jsonify,request
from bson.json_util import dumps, loads
import json
app = Flask(__name__)

client = MongoClient("mongodb+srv://bala_09122002:BalajiAsm09@cluster0.auy9sri.mongodb.net/?retryWrites=true&w=majority")
db = client.sample_1
SignUp = db.signup
Login_Details = db.login_details
Login_id = ""
Emp_Data = {}


@app.route('/SignUp', methods=['POST','GET'])
def form_example():
    if request.method == 'POST':          
        employee_data = request.get_json()
        SignUp.insert_one(employee_data)   
        Login_Details.insert_one({employee_data['emp_id'] : employee_data['emp_password']}) 
        db.create_collection(str(request.get_json().get('emp_id')))

@app.route('/', methods=['POST','GET'])
def login():  
    global Login_id,Emp_Data
    Login_id = request.get_json().get('login_id')
    Login_password = request.get_json().get('login_password') 
    Employee_ID = Login_Details.find({Login_id : Login_password})       
    y = dumps(Employee_ID) 
    authors = json.loads(y)
    Emp_Data = SignUp.find_one({ "emp_id" : Login_id})
    if len(authors) == 1:    
        return jsonify({'success': "True"})
    else :
        return jsonify({'success': "False"})
    
@app.route('/timesheet', methods=['GET','POST'])
def timesheet():       
    
    if request.method == 'GET':
        return json.loads(dumps(Emp_Data))
    if request.method == 'POST':
        dates = request.get_json().get('dates')
        attendance = request.get_json().get('Attandence')
        Start = request.get_json().get('startTime')
        End = request.get_json().get('endTime')
        activitiy = request.get_json().get('Activity')
        db[Login_id].insert_one({"date":dates , "Attendance" : attendance, "StartTime" : Start , "Stoptime" : End , "Activity" : activitiy})
        return db[Login_id].find()
      


       
    

if __name__ == "__main__":
    app.run(port = 5000, debug = True) 


