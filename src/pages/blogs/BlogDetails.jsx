/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import blogsData from '../../data/blog.json';
import Footer from '../../componnets/common/Footer';
import Header from '../../componnets/common/Header';
import ScrollToTopButton from '../../componnets/common/ScrollToTopButton';
console.log("blogsData",blogsData)

const BlogDetails = () => {
  console.log("blogsData",blogsData)
  const { slug } = useParams(); // Extract slug from URL parameters
  const blog = blogsData.find((b) => b.slug === slug); // Find the blog based on the slug

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <div>
        <ScrollToTopButton />

    <div className="blog-details-main">
    <main>
    <Header/>
      <header style={{backgroundImage:`url(${blog.image})`}} >
        <span onClick={() => document.getElementById('down').scrollIntoView()}>
        
        </span>
      </header>

     <div className="container">
     <div className="container-blog">
      <div>
        <h1 id="down">Photography</h1>
        
       
       
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget arcu et enim mattis tristique. Nullam a leo aliquet, tincidunt nibh sit amet, pellentesque mauris. Nunc quis tellus posuere, fermentum felis at, tristique leo. Praesent nec facilisis turpis. Praesent sit amet velit vitae libero mollis efficitur. Praesent rutrum erat quis facilisis dapibus. Curabitur nec tempus nibh, ac eleifend turpis.</p>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis fermentum lectus. Duis lobortis mollis diam, id pellentesque sapien interdum sit amet. Quisque id malesuada leo. Vestibulum ac porttitor arcu. Duis at varius lacus. Integer in blandit ligula, in maximus elit. Nam odio quam, ultrices eget hendrerit nec, sagittis consectetur orci. Sed bibendum augue turpis, aliquet tempus tortor maximus non.</p>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Vestibulum suscipit volutpat semper. Vestibulum dictum enim arcu, ullamcorper aliquam mi rutrum a. In in ultrices quam, quis fringilla enim. Vestibulum vitae odio ligula. Phasellus urna urna, tristique vitae eros ac, laoreet pellentesque tellus. Fusce faucibus lobortis mauris a venenatis. Suspendisse ac eros ac lorem vehicula tempor vel sit amet ex. Duis dignissim mollis ullamcorper. Donec porta iaculis vestibulum. Proin efficitur tempor aliquet. Nunc nec fringilla lectus. Cras mollis in tortor eu fringilla. Aliquam sit amet dictum odio. Nunc vel eros mi.</p>
        <p>Nam auctor eu dolor vitae hendrerit. Vestibulum feugiat erat ac velit placerat, a euismod orci sagittis. Aenean mattis odio in magna blandit consequat. Praesent nulla tortor, lobortis eget velit vel, pharetra tempor mauris. Etiam lacinia at velit at rhoncus. Maecenas tristique dui aliquam dolor dignissim, at bibendum orci bibendum. Curabitur ligula felis, vestibulum sit amet aliquam sit amet, ultricies tincidunt elit. Vestibulum fringilla lacus in commodo venenatis. Suspendisse vitae quam at diam eleifend laoreet. Nam neque leo, venenatis ut lectus at, tristique suscipit tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Nam ac ultricies augue, in gravida dui. Ut accumsan, ante sed scelerisque eleifend, sem sapien tempus ligula, sit amet gravida eros velit venenatis risus. Pellentesque odio ante, lacinia ac dignissim in, ullamcorper nec libero. Nullam imperdiet eros tempor est finibus, ut eleifend metus iaculis. Nam ultrices laoreet purus, quis lobortis nisl tempor ac. Aenean ut ligula ante. Maecenas ac tempor felis. Vivamus accumsan nulla sed finibus efficitur. Aliquam vitae felis eu elit cursus blandit. Ut non ligula mattis, porta ex vitae, porta libero. Morbi ultrices, nunc eget scelerisque vestibulum, massa arcu blandit diam, a viverra risus leo vel sem. Suspendisse sit amet tortor ac risus pretium cursus eu et ipsum. Nullam mattis, libero blandit fermentum rutrum, massa nibh euismod odio, ac sodales tortor velit vitae nunc. Mauris laoreet urna eget placerat eleifend. Suspendisse at eros pharetra, eleifend sapien ut, bibendum lectus. Mauris in sodales est, a dapibus orci.</p>
        <p>Quisque et lacinia ex, a molestie mi. Nulla quis interdum purus. Integer placerat varius ex sit amet vestibulum. Duis a mi malesuada, interdum dui sed, sodales ante. Cras a ipsum metus. Phasellus dui orci, pharetra vel tortor ut, sodales fringilla mi. Phasellus eu velit non est fringilla rutrum.</p>
        <p>Mauris sagittis dui tortor, a fringilla risus suscipit vel. Aenean aliquet volutpat velit eu ultricies. Nulla sit amet diam nisl. Aenean et porttitor mauris. Cras pulvinar eu augue nec gravida. Maecenas ac nunc tincidunt, fermentum mauris vel, auctor mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam feugiat velit sed sollicitudin placerat. Sed tempor odio pharetra, porttitor urna vitae, sodales urna. Curabitur sodales erat vitae fringilla lacinia. Ut tellus leo, auctor et enim vitae, mollis accumsan ipsum. Donec sit amet purus vitae sapien varius eleifend sit amet nec mi.</p>
        <p>Mauris aliquam sagittis mollis. Cras nec eros vel nisl iaculis vulputate. Duis lacinia dictum metus quis iaculis. Integer non imperdiet enim, sit amet sollicitudin augue. Donec viverra tellus at sem mattis tristique. Nullam blandit eu justo quis mollis. Vivamus molestie diam sed turpis ullamcorper maximus. Morbi accumsan risus nibh, vel scelerisque ligula malesuada ut. Donec eu lacus non risus consectetur imperdiet.</p>
       <h2>Lorem ipsum dolor sit.</h2>
        <p>Nam eu lacus quis dolor commodo placerat ut ut arcu. Proin hendrerit efficitur sapien ac tincidunt. Aliquam nec placerat dolor, eu faucibus neque. Aenean egestas pretium felis convallis scelerisque. Nulla ultrices elit vel nisi varius blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ac turpis lectus. Nullam non nunc quis nisi cursus sagittis. Proin vestibulum rhoncus euismod. Proin ullamcorper, risus a aliquam sollicitudin, augue nulla lacinia augue, non imperdiet justo libero quis ex. Nunc venenatis nisi quam, eu tristique mi molestie sit amet. Etiam euismod leo nec urna convallis, in hendrerit turpis congue. Morbi fermentum purus nisl, vel iaculis lectus pharetra in. Nulla facilisi. Suspendisse accumsan ante sit amet congue mattis.</p>
        <p>Etiam semper, diam aliquam consequat rhoncus, augue quam semper erat, bibendum euismod urna nisi ac ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tristique viverra. Mauris venenatis, lorem sit amet vulputate tincidunt, dolor urna varius velit, vel aliquam erat lorem nec mi. Fusce at ornare turpis. Quisque consectetur, velit vel venenatis ultrices, nisl elit porttitor tellus, pharetra finibus eros odio in nisi. Cras tincidunt nulla ac pellentesque finibus. Curabitur interdum urna in tellus dapibus eleifend. In nec pellentesque odio, ut auctor leo. Phasellus vel nisi in nisi egestas mollis. In ornare eleifend pulvinar.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget arcu et enim mattis tristique. Nullam a leo aliquet, tincidunt nibh sit amet, pellentesque mauris. Nunc quis tellus posuere, fermentum felis at, tristique leo. Praesent nec facilisis turpis. Praesent sit amet velit vitae libero mollis efficitur. Praesent rutrum erat quis facilisis dapibus. Curabitur nec tempus nibh, ac eleifend turpis.</p>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis fermentum lectus. Duis lobortis mollis diam, id pellentesque sapien interdum sit amet. Quisque id malesuada leo. Vestibulum ac porttitor arcu. Duis at varius lacus. Integer in blandit ligula, in maximus elit. Nam odio quam, ultrices eget hendrerit nec, sagittis consectetur orci. Sed bibendum augue turpis, aliquet tempus tortor maximus non.</p>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Vestibulum suscipit volutpat semper. Vestibulum dictum enim arcu, ullamcorper aliquam mi rutrum a. In in ultrices quam, quis fringilla enim. Vestibulum vitae odio ligula. Phasellus urna urna, tristique vitae eros ac, laoreet pellentesque tellus. Fusce faucibus lobortis mauris a venenatis. Suspendisse ac eros ac lorem vehicula tempor vel sit amet ex. Duis dignissim mollis ullamcorper. Donec porta iaculis vestibulum. Proin efficitur tempor aliquet. Nunc nec fringilla lectus. Cras mollis in tortor eu fringilla. Aliquam sit amet dictum odio. Nunc vel eros mi.</p>
        <p>Nam auctor eu dolor vitae hendrerit. Vestibulum feugiat erat ac velit placerat, a euismod orci sagittis. Aenean mattis odio in magna blandit consequat. Praesent nulla tortor, lobortis eget velit vel, pharetra tempor mauris. Etiam lacinia at velit at rhoncus. Maecenas tristique dui aliquam dolor dignissim, at bibendum orci bibendum. Curabitur ligula felis, vestibulum sit amet aliquam sit amet, ultricies tincidunt elit. Vestibulum fringilla lacus in commodo venenatis. Suspendisse vitae quam at diam eleifend laoreet. Nam neque leo, venenatis ut lectus at, tristique suscipit tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Nam ac ultricies augue, in gravida dui. Ut accumsan, ante sed scelerisque eleifend, sem sapien tempus ligula, sit amet gravida eros velit venenatis risus. Pellentesque odio ante, lacinia ac dignissim in, ullamcorper nec libero. Nullam imperdiet eros tempor est finibus, ut eleifend metus iaculis. Nam ultrices laoreet purus, quis lobortis nisl tempor ac. Aenean ut ligula ante. Maecenas ac tempor felis. Vivamus accumsan nulla sed finibus efficitur. Aliquam vitae felis eu elit cursus blandit. Ut non ligula mattis, porta ex vitae, porta libero. Morbi ultrices, nunc eget scelerisque vestibulum, massa arcu blandit diam, a viverra risus leo vel sem. Suspendisse sit amet tortor ac risus pretium cursus eu et ipsum. Nullam mattis, libero blandit fermentum rutrum, massa nibh euismod odio, ac sodales tortor velit vitae nunc. Mauris laoreet urna eget placerat eleifend. Suspendisse at eros pharetra, eleifend sapien ut, bibendum lectus. Mauris in sodales est, a dapibus orci.</p>
        <p>Quisque et lacinia ex, a molestie mi. Nulla quis interdum purus. Integer placerat varius ex sit amet vestibulum. Duis a mi malesuada, interdum dui sed, sodales ante. Cras a ipsum metus. Phasellus dui orci, pharetra vel tortor ut, sodales fringilla mi. Phasellus eu velit non est fringilla rutrum.</p>
        <p>Mauris sagittis dui tortor, a fringilla risus suscipit vel. Aenean aliquet volutpat velit eu ultricies. Nulla sit amet diam nisl. Aenean et porttitor mauris. Cras pulvinar eu augue nec gravida. Maecenas ac nunc tincidunt, fermentum mauris vel, auctor mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam feugiat velit sed sollicitudin placerat. Sed tempor odio pharetra, porttitor urna vitae, sodales urna. Curabitur sodales erat vitae fringilla lacinia. Ut tellus leo, auctor et enim vitae, mollis accumsan ipsum. Donec sit amet purus vitae sapien varius eleifend sit amet nec mi.</p>
        <p>Mauris aliquam sagittis mollis. Cras nec eros vel nisl iaculis vulputate. Duis lacinia dictum metus quis iaculis. Integer non imperdiet enim, sit amet sollicitudin augue. Donec viverra tellus at sem mattis tristique. Nullam blandit eu justo quis mollis. Vivamus molestie diam sed turpis ullamcorper maximus. Morbi accumsan risus nibh, vel scelerisque ligula malesuada ut. Donec eu lacus non risus consectetur imperdiet.</p>
       <h2>Lorem ipsum dolor sit.</h2>
        <p>Nam eu lacus quis dolor commodo placerat ut ut arcu. Proin hendrerit efficitur sapien ac tincidunt. Aliquam nec placerat dolor, eu faucibus neque. Aenean egestas pretium felis convallis scelerisque. Nulla ultrices elit vel nisi varius blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ac turpis lectus. Nullam non nunc quis nisi cursus sagittis. Proin vestibulum rhoncus euismod. Proin ullamcorper, risus a aliquam sollicitudin, augue nulla lacinia augue, non imperdiet justo libero quis ex. Nunc venenatis nisi quam, eu tristique mi molestie sit amet. Etiam euismod leo nec urna convallis, in hendrerit turpis congue. Morbi fermentum purus nisl, vel iaculis lectus pharetra in. Nulla facilisi. Suspendisse accumsan ante sit amet congue mattis.</p>
        <p>Etiam semper, diam aliquam consequat rhoncus, augue quam semper erat, bibendum euismod urna nisi ac ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tristique viverra. Mauris venenatis, lorem sit amet vulputate tincidunt, dolor urna varius velit, vel aliquam erat lorem nec mi. Fusce at ornare turpis. Quisque consectetur, velit vel venenatis ultrices, nisl elit porttitor tellus, pharetra finibus eros odio in nisi. Cras tincidunt nulla ac pellentesque finibus. Curabitur interdum urna in tellus dapibus eleifend. In nec pellentesque odio, ut auctor leo. Phasellus vel nisi in nisi egestas mollis. In ornare eleifend pulvinar.</p>
      </div>
      </div>
     </div>
    </main>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogDetails;
