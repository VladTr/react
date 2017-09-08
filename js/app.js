let	my_news	=	[
    {
        author:	'Саша	Печкин',
        text:	'В	четверг,	четвертого	числа...'
    },
    {
        author:	'Просто	Вася',
        text:	'Считаю,	что	$	должен	стоить	35	рублей!'
    },
    {
        author:	'Гость',
        text:	'Бесплатно.	Скачать.	Лучший	сайт	-	http://localhost:3000'
    }
];



let App = React.createClass({
    render:function () {
        return (
            <div className="app">
                React component
                <News data={my_news}/>
                <Comments />
            </div>
        );
    }
});

let News = React.createClass({
   render:function () {
       return (
         <div className="news">
             There are no news:(
         </div>
       );
   }
});

let Comments = React.createClass({
    render:function () {
        return (
            <div className="comments">
                no comments
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);