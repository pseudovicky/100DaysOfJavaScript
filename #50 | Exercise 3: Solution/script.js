let myjokes = [
    {
        "category": "Dark",
        "type": "single",
        "joke": "I don't know where I stand on abortion. I like killing babies, but I don't like giving women a choice.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": true,
            "explicit": true
        },
        "id": 228,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Doctor: \"I have some news about your baby.\"\nParents: \"Don't tell us the gender, we want to keep it a surprise.\"\nDoctor: \"Oh I get it, you're those type of people. Okay, well IT is not breathing.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 138,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "setup": "People are like jellybeans and licorice:",
        "delivery": "No one likes the blacks.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": false
        },
        "id": 100,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "setup": "Arguing with a woman is like reading a software's license agreement.",
        "delivery": "In the end you ignore everything and click \"I agree\".",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": true,
            "explicit": false
        },
        "id": 71,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "setup": "What's the difference between a little girl and a fridge?",
        "delivery": "Fridges don't scream when you put your meat in them.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 122,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "setup": "I won the lottery today!",
        "delivery": "Well, I only got the first two numbers, but my lawyers are working on having them stop the count.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": true,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 258,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "setup": "What's black and sits at the top of a stairwell?",
        "delivery": "A paraplegic after a house fire.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 135,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "setup": "Why do cows wear bells?",
        "delivery": "Because their horns don't work!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 222,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "setup": "My girlfriend left me because I have a fetish for touching pasta.",
        "delivery": "I'm feeling cannelloni now. :'(",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 75,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "setup": "Why does the size of the snack not matter to a giraffe?",
        "delivery": "Because even a little bit goes a long way.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 290,
        "lang": "en"
    }
]

let index = Math.floor(Math.random() * myjokes.length -1 )
// console.log(index)
joke.innerHTML = myjokes[index].joke 