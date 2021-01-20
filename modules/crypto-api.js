class Crypto {
    //constructor
    constructor() {
        //assigning the button to a variable
        this.btnAll = document.querySelector('#btnAll');
        this.getCrypto();

        //asigning the content to an id
        this.content = document.querySelector('#content');


        //dkk
        this.dkk = document.querySelector('#dkk');
        this.getDKK();

        //convert
        this.userInput = document.querySelector('#userInput'); //input field
        //console.log(currency);

        this.submit = document.querySelector('#submit'); //submit btn
        //console.log(convert);
        this.search();

        //BTC
        this.btc = document.querySelector('#btc');
        this.getBTC();
        //console.log(btc);

        //error
        this.errorDiv = document.querySelector('#errorDiv');
    }

    //method - showing all
    getCrypto() {
        this.btnAll.addEventListener('click', () => {
            const ApiUrl = 'https://apiv2.bitcoinaverage.com/constants/exchangerates/global';
            fetch(ApiUrl)
                .then((res) => {
                    return res.json()

                    
                })
                .then((data) => {
                    //console.log(Object.keys(data.rates)); //shows short currency

                    //output to show
                    let showAll = '';

                    let rates = Object.keys(data.rates);

                    //looping
                    rates.forEach(allRates => {
                        //console.log(data.rates); //shows all names and rates
                        showAll = showAll +
                            `
                                <div class="bothValues">
                                    Name of currency: ${data.rates[allRates].name}<br>
                                    Value of currency: ${data.rates[allRates].rate}<br>
                                </div>
                            `
                    });
                    //where to put the content
                    this.content.innerHTML = showAll;
                })
                //errors
                .catch((error) => {
                    console.log((error));
                    this.errorDiv.innerHTML = `${error} <br> Unauthenticated requests are not allowed. Take out a new plan or start a free trial at https://pro.bitcoinaverage.com`;
                }
                
                );
        })

    }
    //method - showing only dkk
    getDKK() {
        this.dkk.addEventListener('click', () => {
            const ApiUrl = 'https://apiv2.bitcoinaverage.com/constants/exchangerates/global';
            fetch(ApiUrl)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    //console.log(Object.keys(data.rates));

                    //output to show
                    let showDKK = '';
                    let rates = Object.keys(data.rates);
                    //console.log(rates)
                    //console.log(data);

                    //loop through all names
                    rates.forEach(currency =>{
                        
                        //console.log(data.rates[currency]) //shows all rates and names
                        //console.log(data.rates[currency].name) //shows all names of currencies
                        if(data.rates[currency].name == 'Danish Krone'){ //if currency name == 'something'
                        showDKK = showDKK +
                            `
                                Name of currency: ${data.rates[currency].name}<br>
                                Value of currency: ${data.rates[currency].rate}<br>
                            `
                            //console.log(data.rates[currency].rate);
                            //console.log(data.rates[currency].rate / 2);
                            //console.log("output", showDKK) //shows the rate of the selected currency
                        }                    
                    })
                    //where to put the content
                    this.content.innerHTML = showDKK;
                })
                //errors
                .catch((error) => {
                    console.log((error));
                    this.errorDiv.innerHTML = `${error} <br> Unauthenticated requests are not allowed. Take out a new plan or start a free trial at https://pro.bitcoinaverage.com`;
                });
        })

    }

    //method - convert
    search(){
        this.submit.addEventListener('click', () => {
            let userInput = document.querySelector('#userInput').value;
            //currency = parseInt(currency);
           //console.log(userInput);

           
            const ApiUrl = 'https://apiv2.bitcoinaverage.com/constants/exchangerates/global';
            fetch(ApiUrl)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    //console.log(Object.keys(data.rates));

                    //output to show
                    let search = '';
                    let rates = Object.keys(data.rates);
                    //console.log(rates)
                    //console.log(data);

                    //loop through all names
                    rates.forEach(currency =>{
                        
                        //console.log(data.rates[currency]) //shows all rates and names
                        //console.log(data.rates[currency].name) //shows all names of currencies
                        if(data.rates[currency].name.toUpperCase() == userInput.toUpperCase()){ //if currency name == 'something' then loops through all
                        search = search +
                            `
                                Name of currency: ${data.rates[currency].name}<br>
                                Value of currency: ${data.rates[currency].rate}<br>
                            `
                            console.log(data.rates[currency].rate);
                            console.log(data.rates[currency].rate / 2);
                            //console.log("output", output2) //shows the rate of the selected currency
                        } else {
                            //console.log('123'); //else shows for all other currencies
                        }                    
                    })
                    //where to put the content
                    this.content.innerHTML = search;
                })
                //errors
                .catch((error) => {
                    console.log((error));
                    this.errorDiv.innerHTML = `${error} <br> Unauthenticated requests are not allowed. Take out a new plan or start a free trial at https://pro.bitcoinaverage.com`;
                });
        })

    }
    //method - BTC
    getBTC(){
        this.btc.addEventListener('click', () => {
            const ApiUrl = 'https://apiv2.bitcoinaverage.com/constants/exchangerates/global';
            fetch(ApiUrl)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    //console.log(Object.keys(data.rates));

                    //output to show
                    let getBTC = '';
                    let rates = Object.keys(data.rates);
                    //console.log(rates)
                    //console.log(data);

                    //loop through all names
                    rates.forEach(currency =>{
                        
                        //console.log(data.rates[currency]) //shows all rates and names
                        //console.log(data.rates[currency].name) //shows all names of currencies
                        if(data.rates[currency].name == 'Bitcoin'){ //if currency name == 'something'
                        getBTC = getBTC +
                            `
                                Name of currency: ${data.rates[currency].name}<br>
                                Value of currency: ${data.rates[currency].rate}<br>
                            `
                            //console.log(data.rates[currency].rate);
                            //console.log(data.rates[currency].rate / 2);
                            //console.log("output", showDKK) //shows the rate of the selected currency
                        }                    
                    })
                    //where to put the content
                    this.content.innerHTML = getBTC;
                })
                //errors
                .catch((error) => {
                    console.log((error));
                    this.errorDiv.innerHTML = `${error} <br> Unauthenticated requests are not allowed. Take out a new plan or start a free trial at https://pro.bitcoinaverage.com`;
                });
        })
    }
}
//exports the class
export default Crypto;