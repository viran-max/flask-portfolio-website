window.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    const btn = document.getElementById("submit-btn");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        btn.innerHTML = "Sending...";
        btn.disabled = true;

        emailjs.sendForm(
            "service_qk31tsb",
            "template_f6wl3cl",
            form
        )

        .then(() => {

            btn.innerHTML = "Message Sent ✅";

            form.reset();

            setTimeout(() => {
                btn.innerHTML = "Send Message";
                btn.disabled = false;
            }, 3000);

        })

        .catch((error) => {

            console.log(error);

            btn.innerHTML = "Failed ❌";

            setTimeout(() => {
                btn.innerHTML = "Send Message";
                btn.disabled = false;
            }, 3000);

        });

    });

});