const getSurvey = (req, res) => {
  try {
    res.json({
      message: "Request Success",
      data: [
        {
          id: "Q0001",
          q: "Ada berapa ban kendaraan anda?",
          a1: "Kurang dari 4",
          a2: "4",
          a3: "Lebih dari 4",
        }
      ]
    }) 
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    }) 
  }
}

const postAnswer = (req, res) => {
  try {
    const answer = req.body.answer
    if (answer == 0) {
      res.json({
        message: "Request Success",
        data: "Kendaraan anda kemungkinan adalah sepeda kayuh, sepeda momtor, atau bemo"
      }) 
    } else if (answer == 1) {
      res.json({
        message: "Request Success",
        data: "Kendaraan anda pasti mobil!"
      }) 
    } else if (answer == 2) {
      res.json({
        message: "Request Success",
        data: "Kendaraan anda kemungkinan adalah truk"
      }) 
    } else {
      res.status(500).json({
        message: "Invalid Answer"
      }) 
    }
    
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    }) 
  }
}

module.exports = {
  getSurvey,
  postAnswer
}