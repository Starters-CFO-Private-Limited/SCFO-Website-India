import React, { Fragment } from 'react';
import Meta from '../../components/site/meta';
import Layout from '../../components/site/layout';
import parse from 'html-react-parser';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import { FormValidation } from 'calidation';
// import { WHATSAPP_DISPLAY_NUMBER } from '../../constants';




class Articles extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      'blogsList': [],
      'categories': [],
      'recentPost': [],
      'allCat': 0,
      'loading': true,
      'cat_id': '',
      'page': 1,
       
    };
}



categoriesId = (item) => {
  this.setState({
    'cat_id': item,
    'page': 1
  });

  const axios = require('axios');

    const url1 = 'https://blog.starterscfo.com/wp-json/wp/v2/posts?per_page=4&page=1&categories='+item;

    axios.get(url1)
        .then((response) => {
          // console.log(response);
            if(response.data!==400){
              this.setState({
                'blogsList': response.data,
                'loading': false
            })
            }else{
              this.setState({
                'blogsList': [],
                'loading': false
              })
            }
           
        })
        .catch((response) => {
            console.error(response);
        })

    
        // count all category
        const url3 = 'https://blog.starterscfo.com/wp-json/wp/v2/posts?categories='+item;

        axios.get(url3)
            .then((res) => {
              // console.log(res);
                if(res.data!==400){
                  var counts = res.data.length/4;

                  if(typeof counts === 'number' &&  !Number.isNaN(counts) && !Number.isInteger(counts )){
                    counts = counts+1;
                    counts = Math.trunc(counts);
                  }
                  this.setState({
                    'allCat': counts
                    // 'loading': false
                })
                }else{
                  this.setState({
                    'blogsList': [],
                    // 'loading': false
                  })
                }
                
            })
            .catch((res) => {
                console.error(res);
            })

                    

}

pageNumber = (num) => {
    this.setState({
        'page': num
    })

    const axios = require('axios');
    if(this.state.cat_id > 0){
      var url1 = 'https://blog.starterscfo.com/wp-json/wp/v2/posts?per_page=4&page='+num+'&categories='+this.state.cat_id;

    }else{
      var url1 = 'https://blog.starterscfo.com/wp-json/wp/v2/posts?per_page=4&page='+num;

    }

    axios.get(url1)
        .then((response) => {
          // console.log(response);
            if(response.data!==400){
              this.setState({
                'blogsList': response.data,
                'loading': false
            })
            }else{
              this.setState({
                'blogsList': [],
                'loading': false
              })
            }
           
        })
        .catch((response) => {
            console.error(response);
        })

    
}


componentDidMount() {

    const axios = require('axios');


        // count all category
        const url3 = 'https://blog.starterscfo.com/wp-json/wp/v2/posts';

        axios.get(url3)
            .then((res) => {
              // console.log(res);
                if(res.data!==400){
                  var counts = res.data.length/4;

                  if(typeof counts === 'number' &&  !Number.isNaN(counts) && !Number.isInteger(counts )){
                    counts = counts+1;
                    counts = Math.trunc(counts);
                  }
                  this.setState({
                    'allCat': counts
                    // 'loading': false
                })
                }else{
                  this.setState({
                    'blogsList': [],
                    // 'loading': false
                  })
                }
               
            })
            .catch((res) => {
                console.error(res);
            })

    //  category by per page
    const url1 = 'https://blog.starterscfo.com/wp-json/wp/v2/posts?per_page=4&page=1';

    axios.get(url1)
        .then((response) => {
          // console.log(response);
            if(response.data!==400){
              this.setState({
                'blogsList': response.data,
                'loading': false
            })
            }else{
              this.setState({
                'blogsList': [],
                'loading': false
              })
            }
           
        })
        .catch((response) => {
            console.error(response);
        })

        ////categories
        const url2 = 'https://blog.starterscfo.com/wp-json/wp/v2/categories';
        axios.get(url2)
            .then((res1) => {
             // console.log(response);
                if(res1.data!==400){
                  this.setState({
                    'categories': res1.data,
                    // 'loading': false
                })
               }else{
                  this.setState({
                    'blogsList': [],
                    // 'loading': false
                  })
                }

               
            })
            .catch((res1) => {
                console.error(res1);
            })


        ////recrnt post
        const url4 = 'https://blog.starterscfo.com/wp-json/wp/v2/posts?per_page=3&page=1';
        axios.get(url4)
            .then((res1) => {
             // console.log(response);
                if(res1.data!==400){
                  this.setState({
                    'recentPost': res1.data,
                    // 'loading': false
                })
               }else{
                  this.setState({
                    'recentPost': [],
                    // 'loading': false
                  })
                }

               
            })
            .catch((res1) => {
                console.error(res1);
            })
    
}

	render() {

    const regex = /(<([^>]+)>)/gi;

		return (


<>
  <Layout promobanner={true}>
    <link rel="stylesheet" href="/static/blog.css" />
    <Meta title="Articles" description="Starters' CFO Articles"></Meta>

    <Container>

    <>
    
      <section className="grid_blog">
        <Container>
          <Row className="row">
            <Col className="col-md-9 col-12">
            <Row className="row">

            {this.state.loading===false? (
               this.state.blogsList.map((object, i) =>

                    <>
                <div className=" col-12">
                  <Link href={"/"+object.slug } className="blog_content">
                   <a className="blog_content">
                    <div className="blog_images">
                      <img src={object.x_featured_media_medium} />
                    </div>
                    <div className="blog_content_txt">
                      <h2>{ parse(object.title.rendered) }</h2>
                      <div className="categories_user">
                        <p className="author">
                          <span>
                            <img src="/static/images/blog/user.png" />
                          </span>
                          { object.author_details.display_name }
                        </p>
                        <p className="publish_date">
                          <span>
                            <img src="/static/images/blog/clock.png" />
                          </span>
                          { object.published_on }
                        </p>
                        <p className="categories_date">
                          <span>
                            <img src="/static/images/blog/categories.png" />
                          </span>
                        {  object.post_terms.map((postcats, ind) =>                   
                        <>                    
                        { ind>0?', '+postcats.name:postcats.name }
                         </>
                        ) 
                        }

                          
                        </p>
                      </div>
                      <p className="description_blog">
                       { parse(object.excerpt.rendered.replace(regex, ""))+'...' }
                      </p>
                      <Link href={"/"+object.slug }><button>Read More</button></Link>
                      
                    </div>
                    </a>
                  </Link>
                </div>

                    </>
                   
                ) 
            
                ):
                <Col className='col-12 m-lg-5 p-5 text-center'>
                    <h1>Loading....</h1>
                </Col>
          }

        <Col className="col-12">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {
                  this.state.page>1?
                  <li className="page-item">
                    <a className="page-link" onClick={() => this.pageNumber(this.state.page-1)} href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                    :
                    ''
                  }
                  
              {Array(this.state.allCat).fill(null).map((value, index) => (
             
              <li onClick={() => this.pageNumber(index+1)}  className={this.state.page===index+1?"page-item active":"page-item"} ><a className="page-link" href="#">{index+1}</a></li>

              ))}

                {
                  this.state.page!==this.state.allCat?
                  <li className="page-item">
                    <a className="page-link" href="#" onClick={() => this.pageNumber(this.state.page+1)}   aria-label="Next">
                    <span aria-hidden="true">»</span>
                    </a>
                  </li>
                    :
                    ''
                  }
                </ul>
              </nav>
          
        </Col>

            
            
            </Row>

            </Col>
            <Col className="col-md-3 col-12">
              <div className="right_blog">
                <div className="categories">
                  <h2>CATEGORIES</h2>
                  <ul>

                    {this.state.categories.length > 0 ? (
                    this.state.categories.map((cat, i) =>                   
                    <>                    
                    <li className={this.state.cat_id===cat.id?'active':''} onClick={() => this.categoriesId(cat.id)}>
                    <i className="fa fa-angle-right" aria-hidden="true" />
                    <span className={this.state.cat_id===cat.id?'active':''}>{ cat.name } </span>
                    </li>
                    </>
                    ) )
                    :''
                    }

                   
                  </ul>
                </div>
                <div className="popular_post">
                  <h2>RECENT POSTS</h2>
                  <ul>
                    
                    
                    {this.state.recentPost.length > 0 ? (
                    this.state.recentPost.map((recentpost, i) =>                   
                    <>                    
                   <li>
                   <Link href={"/"+recentpost.slug } >
                       <a>
                        <span>
                        <img src={recentpost.x_featured_media_medium} />
                        </span>
                        <p> { parse(recentpost.title.rendered) }</p>
                        </a>
                      </Link>
                    </li>

                    </>
                    ) )
                    :''
                    }

                  </ul>
                </div>
                <div className="newsletter">
                  <h2>NEWSLETTER</h2>
                  <div className="newsletter_f">
                    <form action="">
                      <div className="form-group">
                        <input type="" name="" placeholder="Enter name" />
                        <Button>
                          <i className="fa fa-paper-plane" aria-hidden="true" />
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="social_phots">
                  <h2>INSTAGRAM</h2>
                  <div className="">
                    <img src="/static/images/blog/foreign-company-starting-business-india-300x200.jpg" />
                    <img src="/static/images/blog/foreign-company-starting-business-india-300x200.jpg" />
                    <img src="/static/images/blog/foreign-company-starting-business-india-300x200.jpg" />
                    <img src="/static/images/blog/foreign-company-starting-business-india-300x200.jpg" />
                    <img src="/static/images/blog/foreign-company-starting-business-india-300x200.jpg" />
                    <img src="/static/images/blog/foreign-company-starting-business-india-300x200.jpg" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>



      <Row style={{ marginTop: '40px' }}></Row>
    </Container>
  </Layout>
</>


		);
	}
}

export default Articles;
