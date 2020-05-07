

var End = {
  create: function () {
    //CANVAS SIZE = 1200 675
    game.stage.backgroundColor = "#211c33"; //배경색 
    var style1 = { font: "50px Arial", fill: "#ffffff", align: "center" }; //글자 스타일
    var style2 = { font: "140px Arial", fill: "#ffffff", align: "center" }; //글자 스타일
    let gameover = game.add.text(0, 0, "Wi-Fi disconnected", style2)
    let _score = game.add.text(600, 300, "SCORE : " + Math.floor(score), style1).anchor.set(0.5, 0.5)
    let mainButton = game.add.button(450, 500, "button", this.goRanking).anchor.set(0.5)
    let rankingbutton = game.add.button(750, 500, "Gbutton", this.goGangle).anchor.set(0.5)

  },
  goRanking: function () {
    axios.post('account/score', {
      score: Math.floor(score)
    })
      .then(response => {
        window.location.replace('/ranking');
      })
      .catch(err => {
        console.error(err);
      });
  },
  goGangle: function () {
    axios.post('account/score', {
      score: Math.floor(score)
    })
      .then(response => {
        window.location.replace('/');
      })
      .catch(err => {
        console.error(err);
      });
  }
}

game.state.add("End", End);