import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {Avatar, Comment, Icon, Tooltip,Input,Button,Row,Col} from 'antd';

class Comments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
      action: null,
      isShow: false,
      comments: '',
    };
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
    this.handleReply = this.handleReply.bind(this);
    this.handleReply = this.handleReply.bind(this);
    this.handleCommentAdd = this.handleCommentAdd.bind(this);
  }
  emitEmpty() {
    this.userNameInput.focus();
    this.setState({ comments: '' });
  }
  onChangeUserName(e) {
    this.setState({ comments: e.target.value });
  }

  like() {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  }

  dislike() {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  }

  handleReply(isShow) {
    isShow = !isShow;
    this.setState({
      isShow
    });
  }
  // todo，提交评论后添加
  handleCommentAdd() {}

  render() {
    const self = this;
    const {likes, dislikes, action} = this.state;
    const { comments } = this.state;
    const suffix = comments ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={self.like}
          />
        </Tooltip>
        <span style={{paddingLeft: 8, cursor: 'auto'}}>
          {likes}
        </span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={self.dislike}
          />
        </Tooltip>
        <span style={{paddingLeft: 8, cursor: 'auto'}}>
          {dislikes}
        </span>
      </span>,
      // todo，补充标签
      <span onClick={this.handleReply.bind(this, self.state.isShow)}>Reply to</span>,

    ];
    const ExampleComment = ({children}) => (
      <Comment
        actions={actions}
        author={<a>Han Solo</a>}
        avatar={(
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        )}
        content={
          <div>
            <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and
              Axure).</p>
            {self.state.isShow ? 
              <div>
                <Row>
                  <Col span={18}>
                    <Input
                      placeholder="添加评论"
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      suffix={suffix}
                      value={comments}
                      onChange={this.onChangeUserName}
                      ref={node => this.userNameInput = node}
                    />
                  </Col>
                  <Col span={6} style={{paddingLeft:'20px'}}>
                    <Button onClick={this.handleCommentAdd.bind(this)} type="primary">提交评论</Button>
                  </Col>
                </Row>
                
                
              </div> : 
              ''}
          </div>

        }
      >
        {children}
      </Comment>
    );
    return (
      <div>
        {self.props.isShow ?
          <div>
            <ExampleComment>
              <ExampleComment>
                <ExampleComment/>
                <ExampleComment/>
              </ExampleComment>
            </ExampleComment>
          </div>
          : ''}
      </div>
    );
  }
}

export default Comments;
