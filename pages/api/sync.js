import fetch from "node-fetch";

// const options = {
//   hostname: 'https://edisonapi-stage.herokuapp.com',
//   path: '/api/users/assessments-sessions/render/',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization:
//                 "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5OTIxNjMzLCJpYXQiOjE2NjkzMTY4MzMsImp0aSI6IjlkYzY0ZDdkNzY1NDRhMDI5ZTdhYTgyNjcwZWY4NWIxIiwidXNlcl9pZCI6MTYyMDE1fQ.Fni1u4KwcXpKg7KnvXsdpWq8KQC6aViPAobVehHRqtY"
//   },
// };

const sectionSync = async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const questionsRequest = await fetch(
          "https://edisonapi-stage.herokuapp.com/api/users/assessments-sessions/render/",
          {
            method: "POST",
            body: JSON.stringify({
              uas_id: 105,
              section_id: 105,
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5OTIxNjMzLCJpYXQiOjE2NjkzMTY4MzMsImp0aSI6IjlkYzY0ZDdkNzY1NDRhMDI5ZTdhYTgyNjcwZWY4NWIxIiwidXNlcl9pZCI6MTYyMDE1fQ.Fni1u4KwcXpKg7KnvXsdpWq8KQC6aViPAobVehHRqtY",
            },
          }
        );

        const questions = await questionsRequest.json();

        res.json({ questions: "questions" });
      } catch (error) {
        res.status(400).json({ code: error.code, message: error.message });
      }

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default sectionSync;
