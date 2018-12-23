import React from 'react';
import {Breadcrumb, Button, BackTop, Icon, Row, Col, Tabs, List, Skeleton, Tooltip,Popover} from 'antd';
import './public/style.css';

class Position extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      data: [],
      list: []
    };
    this.getData = this.getData.bind(this)
    this.onLoadMore = this.onLoadMore.bind(this);
  }
  componentDidMount() {
    this.getData((res) => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }
  // cb获得数据,todo
  getData(callback) {
    const count = 3
    const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
    fetch(fakeDataUrl).then(results => {
      return results.json();
    }).then(data => {
      callback(data);
    });
  }
  // 每次拼接数据,todo
  onLoadMore() {
    const count = 3;
    // 数据类型
    // {
    //   "gender":"female",
    //   "name":{"title":"miss","first":"emily","last":"holmes"},
    //   "email":"emily.holmes@example.com",
    //   "nat":"GB"
    // }
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.results);
      this.setState({
        data,
        list: data,
        loading: false,
      }, () => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
    });
  }
  
  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore = !initLoading && !loading ? (
      <div style={{
        textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
      }}
      >
        <Button onClick={this.onLoadMore}>更多职位</Button>
      </div>
    ) : null;
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    return (
      <div style={{padding:'10px'}}>
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={item => (
            <List.Item actions={[]}>
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  title={
                    <div>
                      <Row>
                        <Col span={16}>
                          <a href="/#!">{'职位名称'}</a>
                          <Popover placement="rightTop" title={'联系我'} content={content} trigger="hover">
                            <Button style={{border:'none'}}><Icon type="message" /></Button>
                          </Popover>
                        </Col>
                        <Col span={8} style={{textAlign:'right'}}>
                          <button type="button" className="btn btn-outline-default btn-rounded waves-effect">立即申请</button>
                        </Col>
                      </Row>
                    </div>
                  }
                  description={
                    <div>
                      <Row>
                        <Col span={4} style={{color:'#fd5f39'}}>薪资15-25</Col>
                        <Col span={16}>经验3-5年 / 本科 / 全职</Col>
                        <Col span={4}>发表于2018年1月1日</Col>
                      </Row>
                    </div>
                  }
                />
                {/*补充,todo*/}
                <div></div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Position;
