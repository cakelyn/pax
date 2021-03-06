const router = require('express').Router();
const analyze = require('./server-helpers/analyze.js');
const vote = require('./server-helpers/vote.js');
const userData = require('./server-helpers/userData.js');

router.get('/api/getUser', (req, res) => {
  res.send(req.session.user);
});

router.get('/api/logoutUser', (req, res) => {
  req.session.user = null;
  res.send();
});

router.post('/api/analyze', (req, res) => {
  analyze.analyzeText(req.body.data, 'Your Input', req.body.data, req.session.user, res, req.body.data, false);
});

router.post('/api/extract', (req, res) => {
  analyze.analyzeUrl(req.body.data, req.session.user, res);
});

router.get('/api/vote/:id', (req, res) => {
  // Params is a string, so 'undefined' will be a string, not a native value.
  if (req.params.id !== 'undefined') {
    vote.retrieveVotes(req.params.id, req.session.user, res);
  } else {
    // An unregistered user is looking up an article that does not exist in the database.
    // Therefore, vote counts should be zero.
    res.send({
      downvote: false,
      downVoteCount: 0,
      upvote: false,
      upVoteCount: 0,
    });
  }
});

router.post('/api/vote', (req, res) => {
  vote.submitVote(req.session.user, req.body.article_id, req.body.upvote, (votes) => {
    res.send(votes);
  });
});

router.get('/api/user/upvoteAverages', (req, res) => {
  const isLoggedInUser = !!req.session.user;
  if (isLoggedInUser) {
    userData.getUpvoteAverage(req.session.user, (toneAverages) => {
      res.send(toneAverages);
    });
  } else {
    res.send({
      anger: 0,
      disgust: 0,
      fear: 0,
      joy: 0,
      sadness: 0,
      analytical: 0,
      confident: 0,
      tentative: 0,
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      emotional_range: 0,
    });
  }
});

router.get('/api/user/allArticles', (req, res) => {
  const isLoggedInUser = !!req.session.user;
  if (isLoggedInUser) {
    userData.getArticlesByUser(req.session.user, (err, articles) => {
      if (err) {
        res.status(500);
        res.write(err);
        res.send();
      } else {
        res.send(articles);
      }
    });
  } else {
    res.send();
  }
});

module.exports = router;
