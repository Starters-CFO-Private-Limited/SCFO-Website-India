import React, { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import Meta from '../components/site/meta';
import Layout from '../components/site/layout';
import parse from 'html-react-parser';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Article() {
  
 
  const { query } = useRouter();
  const [blog, setBlog] = useState('');
  const [usefulBlogs, setUsefulBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

                  
    useEffect(() => {

      const axios = require('axios');

        if(query['article-slug']!==''){

          const url1 = 'https://blog.starterscfo.com/wp-json/wp/v2/posts?slug='+query['article-slug'];
          axios.get(url1)
              .then((response) => {
                // console.log(response);
                  if(response.data!==400){
                          setBlog(response.data[0]);
                  }else{
                    setBlog('');
                  }
                  setLoading(false);

              })
              .catch((response) => {
                  console.error(response);
              })
        }

        const url1 = 'https://blog.starterscfo.com/wp-json/wp/v2/posts?per_page=4&page=1';

        axios.get(url1)
          .then((response) => {
           // console.log(response);
              if(response.data!==400){
                
              setUsefulBlogs(response.data);

              }else{
                
                setUsefulBlogs([]);

              }
              
          })
          .catch((response) => {
              console.error(response);
          })

          
    }, [query]);

  return (

    <>
<Layout promobanner={true}>
    <link rel="stylesheet" href="/static/blog.css" />
    { blog ? 
        <Meta title={ parse(blog.yoast_head_json.title) } description={ parse(blog.yoast_head_json.og_description) } ></Meta>
    :
    <Meta title="Articles" description="Starters' CFO Articles"></Meta>
    }

    <Container>
    { blog ? 
    <>
    

    <section className="single_blog">
      <Container>
        <Row className="row">
          <Col className="col-md-8 col-12">
            <div className="single_product_image">
              <img src={blog.x_featured_media_large} />
            </div>
            <h2 className="blog_heading">
            <h2>{ parse(blog.title.rendered) }</h2>
            </h2>
            <div className="contact_detail">
              <p>
                Published on:<span className="date_user"> { blog.published_on }</span>
              </p>
              <a className="comment_detail" href="#">
                <span>
                  <img src="/static/images/blog/user.png" alt="" />
                </span>
                { blog.author_details.display_name }
              </a>
              {/* <a className="comment_detail" href="#">
                <span>
                  <img src="/static/images/blog/comment.svg" alt="" />
                </span>
                Comments
              </a> */}
              
            </div>
            <div className="sub_content">
            { parse(blog.content.rendered) }
            </div>
          </Col>



          <Col className="col-md-4 col-12">
            <div className="single_blog_right">
              <h2>Other Useful Guides</h2>
              <div className="related_post">
                
                {usefulBlogs.length > 0 ? (
                  usefulBlogs.map((blogList,index) => (
                <> 
                <Link href={"/"+blogList.slug } className="blogs_related">
                    <a className="blogs_related">   
                        <span> <img src={blogList.x_featured_media_medium} /></span>
                        <h2>{ parse(blogList.title.rendered) }</h2>
                    </a>
                </Link>
                </>
                ))
                ) : '' }

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    </>
    :
    <section>
    <Row className='row'>
    <Col className='col-12 m-lg-5 p-5 text-center'>
      {loading?
       <h1>Loading....</h1>
      :
      <h1>404 | This page could not be found.</h1>
      }

    
    </Col>
    </Row>
    </section>


    }

<Row style={{ marginTop: '40px' }}></Row>
</Container>
</Layout>
</>

  );
}