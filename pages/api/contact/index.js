import axios from "axios";

export default async (req, res) => {
  if (req.method == "POST") {
    const id = process.env.NEXT_PUBLIC_ID;
    const message = req.body.message;
    const name = req.body.name;
    const email = req.body.email;
    if (name && message && email && id) {
      try {
        const respond_to_user = await axios.get(
          `https://api.telegram.org/bot${
            process.env.NEXT_PUBLIC_BOT_TOKEN
          }/sendMessage?chat_id=${id}&text=${encodeURI(
            "CONTACT ME SECTION: \nName: " +
              name +
              "\nEmail: " +
              email +
              "\nMessage: " +
              message
          )}`
        );
        res.status(200).send({
          data: respond_to_user.data,
        });
      } catch {
        res.status(400).send({
          error: "SERVER FAILED : bot connection falure",
        });
      }
    } else {
      res.status(400).send({ error: "SERVER FAILED: incomplete parameters" });
    }
  } else {
    res.status(400).send({ error: "SERVER FAILED: method not allowed" });
  }
};
