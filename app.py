from flask import Flask, render_template, request
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

app.config['MAIL_SERVER'] = os.getenv("MAIL_SERVER", "smtp.gmail.com")
app.config['MAIL_PORT'] = int(os.getenv("MAIL_PORT", 587))

app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv("MAIL_USERNAME")
app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")
app.config['MAIL_DEFAULT_SENDER'] = os.getenv("MAIL_DEFAULT_SENDER")

mail = Mail(app)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/contact", methods=["POST"])
def contact():

    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    # Create Email
    msg = Message(
        subject=f"New Portfolio Message from {name}",
        recipients=["verain.k1801@gmail.com"]
    )

    msg.body = f"""
You received a new portfolio message.

Name: {name}

Email: {email}

Message:
{message}
"""

    # Send Mail
    mail.send(msg)
    

    return render_template("index.html", success=True)

if __name__ == "__main__":
    app.run(debug=True)