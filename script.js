let text = 'Tallet mitt: ';
        let tall = 0;


        console.log()
        myNumber();


        function myNumber() {
            document.getElementById('myNumber').innerHTML = text + tall;
        }


        function add() {
            tall += 1;
            myNumber()
        }

        function sub() {
            tall -= 1;
            myNumber()
        }