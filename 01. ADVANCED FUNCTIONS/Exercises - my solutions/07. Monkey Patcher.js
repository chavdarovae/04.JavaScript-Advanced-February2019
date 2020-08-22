function solution(cmd) {

    const upvote = () => {
        return ++this.upvotes;
    }

    const downvote = () => {
        return ++this.downvotes;
    }

    const score = () => {
        let posVotes = this.upvotes;
        let negVotes = this.downvotes;

        let rating = '';
        if (posVotes + negVotes < 10) {
            rating = 'new'
        } else if (posVotes > 0.66 * (posVotes + negVotes)) {
            rating = 'hot'
        } else if (posVotes >= negVotes && (posVotes > 100 || negVotes > 100)) {
            rating = 'controversial'
        } else if (posVotes < negVotes) {
            rating = 'unpopular'
        } else {
            rating = 'new'
        }

        if (posVotes + negVotes > 50) {
            let voteObfuscation = posVotes >= negVotes ? Math.ceil(0.25 * posVotes) : Math.ceil(0.25 * negVotes);
            posVotes += voteObfuscation;
            negVotes += voteObfuscation;
        }   

        return [posVotes,negVotes,posVotes - negVotes,rating];
    }

    let obj = {
        upvote,
        downvote,
        score
    }
    return obj[cmd]();
}

let forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 100,
    downvotes: 101
};

solution.call(forumPost, 'upvote');

console.log(solution.call(forumPost, 'score'));
