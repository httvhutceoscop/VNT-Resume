import React, { Component } from 'react';

class Introduction extends Component {
    render() {
        return (
            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-user fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    <span>Introduction</span>
                </h2>
                <div className="w3-container">
                    <p>
                        I am very active in life, thirst for knowledge, and have high responsibility for my job. I love reading books, animals and sports, especially football.<br />
                        I am very interested in community activities.<br />
                        I love programming and management.<br />
                        I learned new language programming myself and built an education app on CH Play: <a href='https://play.google.com/store/apps/details?id=com.toilamit.EssentialWordsByImage&hl=vi&gl=US' target='_blank' rel='noopener noreferrer'>600 Từ Vựng TOEIC</a> <br />
                        I often read a book, online to research new technical or management while drinking a cup of coffee. Writting blog is also my hobbit, you can see my blog here: <a href='https://kysuit.net' target='_blank' rel='noopener noreferrer'>https://kysuit.net</a><br />
                        I always make a clear plan in my career path and thus it helps me a lot in works and life.<br />
                    </p>
                    <br />
                </div>
            </div>
        );
    }
}

export default Introduction;
