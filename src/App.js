import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {store} from './data/store';

import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Home} from './ui/page/home';
import {Login} from './ui/page/login';
import {Applicant} from './ui/page/applicant';
import {Organization} from './ui/page/organization';
import {Job} from './ui/page/job';
import {Search} from './ui/page/search';
import {Help} from './ui/page/help';
import {PageNoFound} from './ui/page/page-no-found';
import {Discovery} from './ui/page/discovery';
import {QuestionAndAnswer} from './ui/page/question/question-and-answer';
import {Article} from './ui/page/article/article';
import {QuestionEditor} from './ui/page/question/question-editor';
import {ArticleEditor} from './ui/page/article/article-editor';
import Question from './ui/page/question';

import CoDetail from './ui/page/coDetail';
import {JobInfo} from './ui/page/jobinfo/job-info';
import {ResumePost} from './ui/page/jobinfo/resume-post';

import {SearchPageBefore} from './ui/page/search-page-before';
import {Connection} from './ui/page/connection';
import {VideoRecommendation} from './ui/page/video-recommendation';
import {SearchPageAfter} from './ui/page/search-page-after';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/"
              exact component={routeProps => <Home {...routeProps} />}
            />
            <Route
              path="/login"
              component={routeProps => <Login {...routeProps} />}
            />
            <Route
              path="/applicant/:id"
              
              component={routeProps => <Applicant {...routeProps} />}
            />
            <Route
              path="/organization/:id"
              component={routeProps => <Organization {...routeProps} />}
            />
            <Route
              path="/job/:id"
              component={routeProps => <Job {...routeProps} />}
            />
            <Route
              path="/search"
              component={routeProps => <Search {...routeProps} />}
            />
            <Route
              path="/help"
              component={routeProps => <Help {...routeProps} />}
            />
            <Route
              path="/discovery"
              component={routeProps => <Discovery {...routeProps} />}
            />
            <Route
              path="/question" exact
              component={routeProps => <Question {...routeProps} />}
            />
            <Route
              path="/question/:id"
              component={routeProps => <QuestionAndAnswer {...routeProps} />}
            />
            <Route
              path="/question-editor"
              component={routeProps => <QuestionEditor {...routeProps} />}
            />
            <Route
              path="/article"
              component={routeProps => <Article {...routeProps} />}
            />
            <Route
              path="/article-editor"
              component={routeProps => <ArticleEditor {...routeProps} />}
            />
            <Route
              path="/company-detail"
              component={routeProps => <CoDetail {...routeProps} />}
            />
            <Route
              path="/resume-post"
              component={routeProps => <ResumePost {...routeProps} />}
            />
            <Route
              path="/job-info"
              component={routeProps => <JobInfo {...routeProps} />}
            />
            <Route
              path="/search-page-before"
              component={routeProps => <SearchPageBefore {...routeProps} />}
            />
            <Route
              path="/search-page-after"
              component={routeProps => <SearchPageAfter {...routeProps} />}
            />
            <Route
              path="/connection"
              component={routeProps => <Connection {...routeProps} />}
            />
            <Route
              path="/video-recommendation"
              component={routeProps => <VideoRecommendation {...routeProps} />}
            />
            <Route
              component={routeProps => <PageNoFound {...routeProps} />}
            />
          
           
           
          </Switch>
        </div>
       
        
      </BrowserRouter>
    </Provider>
  );
};

export {App};
