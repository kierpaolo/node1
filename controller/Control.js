const ph = {
    kpp:(req, res)=>{
        res.render('index');
    },
    kier:(req, res)=>{
        res.render('about');
    },
    paolo:(req, res)=>{
        res.render('contact');
    },
    umbao:(req, res)=>{
        res.render('home');
    },
    pineda:(req, res)=>{
        res.render('dashboard');
    }
};

module.exports = ph;