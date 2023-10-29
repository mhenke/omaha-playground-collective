export default function NewBlog() {
  return (
    <div className="wp-block-ncmaz-core-block-magazine" data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-magazine" data-nc-gutenberg-section-api={"blockName":"nc-block-magazine","graphQLvariables":{"variables":{"categoryIn":[5],"tagIn":[],"authorIn":[],"order":"DESC","field":"TITLE","first":4},"queryString":"GQL_QUERY_GET_POSTS_BY_FILTER"},"hasSSrInitData":{"hasSSrInitData":true,"initPostIDs":[95,108,86,273],"initPageInfo":{"hasNextPage":false,"hasPreviousPage":false,"endCursor":"YXJyYXljb25uZWN0aW9uOjI3Mw==","startCursor":"YXJyYXljb25uZWN0aW9uOjk1"}},"settings":{"sectionName":"large-slider","showFilterTab":false,"viewMoreHref":"#","heading":"Editor's pick 💡","subHeading":"Discover the most outstanding articles in all topics of life.","hasBackground":false,"categories":[{"id":5,"slug":"garden","value":5,"label":"Garden","name":"Garden"},"expectedNumberResults":4}}>
      <div className="nc-FactoryBlockMagazine relative">
        <div className="relative">
          <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-14 text-neutral-900 dark:text-neutral-50">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Editor's pick 💡</h3>
              <span className="mt-2 md:mt-3 font-normal block text-base md:text-xl text-neutral-500 dark:text-neutral-400">
                Discover the most outstanding articles in all topics of life.
              </span>
            </div>
          </div>
          <div className="ncSectionLargeSlider">
            {/* Carousel and image zoom-in section */}
            <div className="carousel-container">
              {/* Add your carousel code here */}
              <div className="carousel-slide">
                <img
                  src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2294353-1.jpeg"
                  alt="Image 1"
                />
              </div>
              {/* Add more carousel slides as needed */}
            </div>
            {/* Add your image zoom-in section */}
            <div className="image-zoom">
              <img
                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2294353-1.jpeg"
                alt="Image Zoom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
