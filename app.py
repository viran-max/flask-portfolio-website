from flask import Flask, render_template, request
import mysql.connector
import os
from dotenv import load_dotenv
load_dotenv() 


app = Flask(__name__)

# MYSQL CONFIG
try:
    db = mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )
    cursor = db.cursor()
except:
    db = None
    cursor = None


@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")

@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    # insert into DB
    sql = """
        INSERT INTO contacts (name,email,message)
        VALUES (%s, %s, %s)
    """
    values = (name,email,message)

    cursor.execute(sql,values)
    db.commit()

    return render_template("index.html", success=True)

if __name__ == "__main__":
    app.run(debug=True)
