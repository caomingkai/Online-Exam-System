// sudo mongod  // 1. start mongodb server


// mondo        // 2 log in mongo-cli program

use NAF;


db.user.insert([
    {
        "email":"Alice@naf.com",
        "password": "1"
    },
    {
        "email":"Bob@naf.com",
        "password": "1"
    },
    {
        "email":"Cat@naf.com",
        "password": "1"
    },
    {
        "email":"Dog@naf.com",
        "password": "1"
    },
    {
        "email":"a@a.com",
        "password": "1"
    }
]);



db.section1.insert([
    {
        "id": 1,
        "type": 1,
        "question":{
            "caption": "Sample Question 2",
            "options":[
                "option 1-1-1",
                "option 1-1-2",
                "option 1-1-3",
                "option 1-1-4"
            ]
        },
        "answer": ""
    },
    {
        "id": 2,
        "type": 1,
        "question":{
            "caption": "Sample Question 2",
            "options":[
                "option 1-2-1",
                "option 1-2-2",
                "option 1-2-3",
                "option 1-2-4"
            ]
        },
        "answer": ""
    },
    {
        "id": 3,
        "type": 1,
        "question":{
            "caption": "Sample Question 3",
            "options":[
                "option 1-2-1",
                "option 1-2-2",
                "option 1-2-3",
                "option 1-2-4"
            ]
        },
        "answer": ""
    },
    {
        "id": 4,
        "type": 1,
        "question":{
            "caption": "Sample Question 4",
            "options":[
                "option 1-2-1",
                "option 1-2-2",
                "option 1-2-3",
                "option 1-2-4"
            ]
        },
        "answer": ""
    },
    {
        "id": 5,
        "type": 1,
        "question":{
            "caption": "Sample Question 5",
            "options":[
                "option 1-2-1",
                "option 1-2-2",
                "option 1-2-3",
                "option 1-2-4"
            ]
        },
        "answer": ""
    },
    {
        "id": 6,
        "type": 1,
        "question":{
            "caption": "Sample Question 6",
            "options":[
                "option 1-2-1",
                "option 1-2-2",
                "option 1-2-3",
                "option 1-2-4"
            ]
        },
        "answer": ""
    }
]);






db.section2.insert([
    {
        "id": 1,
        "type": 2,
        "question":{
            "caption": "Sample Question 2-1",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
            "options":[
                "option 2-1-1",
                "option 2-1-2",
                "option 2-1-3",
                "option 2-1-4"
            ]
        },
        "answer": ""
    },
    {
        "id": 2,
        "type": 2,
        "question":{
            "caption": "Sample Question 2-2",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
            "options":[
                "option 2-2-1",
                "option 2-2-2",
                "option 2-2-3",
                "option 2-2-4"
            ]
        },
        "answer": ""

    },
    {
        "id": 3,
        "type": 2,
        "question":{
            "caption": "Sample Question 2-3",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
            "options":[
                "option 2-2-1",
                "option 2-2-2",
                "option 2-2-3",
                "option 2-2-4"
            ]
        },
        "answer": ""

    },
    {
        "id": 4,
        "type": 2,
        "question":{
            "caption": "Sample Question 2-4",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
            "options":[
                "option 2-2-1",
                "option 2-2-2",
                "option 2-2-3",
                "option 2-2-4"
            ]
        },
        "answer": ""

    },
    {
        "id": 5,
        "type": 2,
        "question":{
            "caption": "Sample Question 2-5",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
            "options":[
                "option 2-2-1",
                "option 2-2-2",
                "option 2-2-3",
                "option 2-2-4"
            ]
        },
        "answer": ""

    },
    {
        "id": 6,
        "type": 2,
        "question":{
            "caption": "Sample Question 2-6",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
            "options":[
                "option 2-2-1",
                "option 2-2-2",
                "option 2-2-3",
                "option 2-2-4"
            ]
        },
        "answer": ""

    }
])






db.section3.insert([
    {
        "id": 1,
        "type": 3,
        "question":{
            "caption": "Sample Question 3-1",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
        },
        "answer": ""
    },
    {
        "id": 2,
        "type": 3,
        "question":{
            "caption": "Sample Question 3-2",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
        },
        "answer": ""
    },
    {
        "id": 3,
        "type": 3,
        "question":{
            "caption": "Sample Question 3-2",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
        },
        "answer": ""
    },
    {
        "id": 4,
        "type": 3,
        "question":{
            "caption": "Sample Question 3-2",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
        },
        "answer": ""
    },
    {
        "id": 5,
        "type": 3,
        "question":{
            "caption": "Sample Question 3-2",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
        },
        "answer": ""
    },
    {
        "id": 6,
        "type": 3,
        "question":{
            "caption": "Sample Question 3-2",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
        },
        "answer": ""
    },
    {
        "id": 7,
        "type": 3,
        "question":{
            "caption": "Sample Question 3-2",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
        },
        "answer": ""
    },
    {
        "id": 8,
        "type": 3,
        "question":{
            "caption": "Sample Question 3-2",
            "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
        },
        "answer": ""
    }
])




db.answer1.insert([
    {
        "id": 1,
        "type": 1,
        "score": 1,
        "answer": "option 1-1-1"
    },
    {
        "id": 2,
        "type": 1,
        "score": 1,
        "answer": "option 1-1-1"
    },
    {
        "id": 3,
        "type": 1,
        "score": 1,
        "answer": "option 1-1-1"
    },
    {
        "id": 4,
        "type": 1,
        "score": 1,
        "answer": "option 1-1-1"
    },
    {
        "id": 5,
        "type": 1,
        "score": 1,
        "answer": "option 1-1-1"
    },
    {
        "id": 6,
        "type": 1,
        "score": 1,
        "answer": "option 1-1-1"
    },
    {
        "id": 7,
        "type": 1,
        "score": 1,
        "answer": "option 1-1-1"
    },
    {
        "id": 8,
        "type": 1,
        "score": 1,
        "answer": "option 1-1-1"
    },

])


db.answer2.insert([
    {
        "id": 1,
        "type": 2,
        "score": 2,
        "answer": "option 2-2-2"
    },
    {
        "id": 2,
        "type": 2,
        "score": 2,
        "answer": "option 2-2-2"
    },
    {
        "id": 3,
        "type": 2,
        "score": 2,
        "answer": "option 2-2-2"
    },
    {
        "id": 4,
        "type": 2,
        "score": 2,
        "answer": "option 2-2-2"
    },
    {
        "id": 5,
        "type": 2,
        "score": 2,
        "answer": "option 2-2-2"
    },
    {
        "id": 6,
        "type": 2,
        "score": 2,
        "answer": "option 2-2-2"
    },
    {
        "id": 7,
        "type": 2,
        "score": 2,
        "answer": "option 2-2-2"
    },
    {
        "id": 8,
        "type": 2,
        "score": 2,
        "answer": "option 2-2-2"
    },

])


db.answer3.insert([
    {
        "id": 1,
        "type": 3,
        "score": 3,
        "answer": ""
    },
    {
        "id": 2,
        "type": 3,
        "score": 3,
        "answer": ""
    },
    {
        "id": 3,
        "type": 3,
        "score": 3,
        "answer": ""
    },
    {
        "id": 4,
        "type": 3,
        "score": 3,
        "answer": ""
    },
    {
        "id": 5,
        "type": 3,
        "score": 3,
        "answer": ""
    },
    {
        "id": 6,
        "type": 3,
        "score": 3,
        "answer": ""
    },
    {
        "id": 7,
        "type": 3,
        "score": 3,
        "answer": ""
    },
    {
        "id": 8,
        "type": 3,
        "score": 3,
        "answer": ""
    },

])
