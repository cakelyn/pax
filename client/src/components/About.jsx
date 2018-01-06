import React from 'react';
import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    visible: store.user.aboutView,
  };
}) export default class About extends React.Component {
  render() {
    return this.props.visible && (
      <div className="padTop">
        <h2 className="center-text">Welcome to Pax-Atlantica</h2>
        <div className="width700 center-text">
          <p>
            <i>We hope to help you to better navigate news sources and give you
              insight and feedback on articles you trust.</i>
            <br />
            <br />
            Pax-Atlantica allows anyone to estimate the trustworthiness any
            article. We use various tonal and sentiment analysis along with our
            own scoring algorithm in order to help you decide whether you can
            take an article for its word.
            <br />
            <br />
            Anyone can use our app, but if you log in, we will be able to keep
            track of the types of articles you submit and trust. This will
            allow us to give you an overview of the traits of the articles you
            typically trust. You will also be able to participate in our rating
            system by upvoting articles you trust, and downvoting articles you
            don&apos;t.
            <br />
            <br />
            Have an article that you would like to view an analysis and trust
            rating of? Log in and start analyzing!
          </p>
        </div>

        <h2 className="center-text padTop">Engineering Team</h2>

        <div className="row">
          <Card className="column center-text">
            <CardHeader
              avatar={<Avatar src="https://avatars0.githubusercontent.com/u/26661703?s=400&v=4" size={150} style={{ margin: '0 auto' }} />}
              style={{
 width: '150px', height: '150px', padding: '0', margin: '0 auto',
}}
            />
            <CardTitle
              title={<h3>Alexander Mire</h3>}
              subtitle="Product Owner and Software Engineer"
            />
            <CardText>
              <a href="https://github.com/bobdaball"><i className="fa fa-2x fa-github pad" /></a>
              <a href="https://www.linkedin.com/in/alexander-mire-6034a0126"><i className="fa fa-2x fa-linkedin-square pad" /></a>
              <a href="mailto:amire51117@gmail.com"><i className="fa fa-2x fa-envelope pad" /></a>
            </CardText>
          </Card>

          <Card className="column center-text">
            <CardHeader
              avatar={<Avatar src="https://avatars2.githubusercontent.com/u/11858278?s=460&v=4" size={150} style={{ margin: '0 auto' }} />}
              style={{
 width: '150px', height: '150px', padding: '0', margin: '0 auto',
}}
            />
            <CardTitle
              title={<h3>Katelyn Stamas</h3>}
              subtitle="Scrum Master and Software Engineer"
            />
            <CardText>
              <a href="https://github.com/cakelyn"><i className="fa fa-2x fa-github pad" /></a>
              <a href="https://linkedin.com/in/katestamas"><i className="fa fa-2x fa-linkedin-square pad" /></a>
              <a href="mailto:cakelyn@gmail.com"><i className="fa fa-2x fa-envelope pad" /></a>
            </CardText>
          </Card>

          <Card className="column center-text">
            <CardHeader
              avatar={<Avatar src="https://avatars3.githubusercontent.com/u/24529486?s=460&v=4" size={150} style={{ margin: '0 auto' }} />}
              style={{
 width: '150px', height: '150px', padding: '0', margin: '0 auto',
}}
            />
            <CardTitle
              title={<h3>Nicholas Orr</h3>}
              subtitle="Software Engineer"
            />
            <CardText>
              <a href="https://github.com/nickParis11"><i className="fa fa-2x fa-github pad" /></a>
              <a href="https://www.linkedin.com/in/nsoen/"><i className="fa fa-2x fa-linkedin-square pad" /></a>
              <a href="mailto:orr.nicholas.sean@gmail.com"><i className="fa fa-2x fa-envelope pad" /></a>
            </CardText>
          </Card>

          <Card className="column center-text">
            <CardHeader
              avatar={<Avatar src="https://avatars0.githubusercontent.com/u/21134999?s=460&v=4" size={150} style={{ margin: '0 auto' }} />}
              style={{
width: '150px', height: '150px', padding: '0', margin: '0 auto',
}}
            />
            <CardTitle
              title={<h3>David Wen Riccardi-Zhu</h3>}
              subtitle="Software Engineer"
            />
            <CardText>
              <a href="https://github.com/dwrz"><i className="fa fa-2x fa-github pad" /></a>
              <a href="https://www.linkedin.com/in/dwriccardizhu/"><i className="fa fa-2x fa-linkedin-square pad" /></a>
              <a a href="mailto:dwrz@dwrz.net"><i className="fa fa-2x fa-envelope pad" /></a>
            </CardText>
          </Card>
        </div>

        <h2 className="center-text padTop">Tech Stack</h2>
        <p className="center-text">
          <a href="https://github.com/pax-atlantica/pax">Pax-Atlantica</a><br />
          <a href="https://github.com/pax-atlantica/pax-ci">Pax-CI</a>
        </p>
        <div className="row">
          <img alt="React" src="../../assets/icon_react.png" />
          <img alt="Redux" src="../../assets/icon_redux.png" />
          <img alt="Nodejs" src="../../assets/icon_node.png" />
          <img alt="PostgreSQL" src="../../assets/icon_postgresql.png" />
          <img alt="Amazon Web Services" src="../../assets/icon_aws.png" />
          <img alt="IBM Watson" src="../../assets/icon_ibmwatson.png" />
          <img alt="Aylien" src="../../assets/icon_aylien.png" />
          <img alt="Webpack" src="../../assets/icon_webpack.png" />
          <img alt="Material UI" src="../../assets/icon_materialui.png" />
          <img alt="D3" src="../../assets/icon_d3.png" />
          <img alt="Babel" src="../../assets/icon_babel.png" />
          <img alt="Linux Shell Script" src="../../assets/icon_bash.png" />
        </div>
      </div>
    );
  }
}

