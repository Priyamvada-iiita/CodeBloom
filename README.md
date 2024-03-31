#CODEBLOOM
CODING PLATFORM APPLICATION

Code Bloom, an innovative coding practice platform, addresses the challenge of search engine visibility in a saturated coding website landscape. Focusing on SEO friendliness, the platform employs advanced page-building strategies to pre-render content, optimizing search engine indexing and enhancing rankings.

The platform strategically balances rendering issues by incorporating Static Site Generation (SSG) for infrequently changing data and Server-Side Rendering (SSR) for dynamic content. A hybrid approach ensures periodic content refresh while maintaining the benefits of a static site.

Trade-offs between user experience and load time, security and convenience (leveraging Firebase), and managing local and dynamic databases are successfully planned. The platform also tackles the hydration error through a thoughtful implementation, ensuring compatibility with React's expectations during rendering.

Code Bloom stands out with a minimalistic approach, offering a concise and intuitive coding experience. With a user-friendly interface, support for multiple languages, and robust authentication and database management using Firebase, Code Bloom provides a seamless environment for users to express preferences, bookmark challenges, and experience the joy of coding.

Crafted to address the prevailing challenge in an industry saturated with numerous coding websites, my solution targets the pivotal issue of search engine visibility. In a sea/jungle of coding platforms, the determining factor for visibility rests in the hands of the all-powerful Google search engine. To secure a prominent position in search results, a website must be tailored to be Search Engine Optimization (SEO) friendly, a practice diligently embraced by industry leaders such as Netflix and Instagram.

Conventionally:
The conventional approach to rendering web applications involves the client side, where HTML, CSS, and JS are downloaded by the browser. Subsequently, JS takes the reins to render the entire page, encapsulating all functionalities in a single bundle provided to the browser. In this process, JS handles tasks such as content painting, asset downloading, blog posting, and image population. However, since the entire content population relies on JS, it poses a challenge for search engine bots, especially the Google bot, as JS doesn't operate instantaneously. Consequently, the bot cannot read the content, leading to an inability to generate the previews commonly seen on social media platforms. This lack of accessibility for bots renders the website non-SEO friendly, resulting in compromised search rankings. The delay in the First Contextual Paint further exacerbates the issue, adversely impacting user experience.

Focus was on:
Backend/Storage division issue
Fighing against slow and inappropriate rendering
Balancing the trade-offs
Visiblity in google search

Unique/Advanced solution offered by my Websites:

SEO friendly: In response to this SEO dilemma, we employ innovative page-building strategies. Our approach ensures that the data sent to the browser contains pre-rendered content, eliminating the reliance on JavaScript for initial content display. By adopting this method, we prioritize SEO friendliness, allowing search engine bots to index the website effectively and enhancing search rankings. This proactive measure not only mitigates the challenges posed by delayed rendering but also optimizes user experience, creating a website that stands out in the competitive landscape.


Faster: Rendering Issues covered(SSG, SSR): 
Static Site Generation (SSG): Transforms the complete website into a static form to enhance delivery speed, ideal for data that changes infrequently.

Server Side Rendering (SSR): Generates pages on the server, delivering dynamic content tailored for data that changes frequently.
	
The Challenge was to balance it and decide what to use where. First, we fetch the local data created using SSG(Static Site Generation). The pages will be pre-generated on the server, it’s super-fast, has no loading state, is immediate render, already rendered while built. Client site fetching is for data stored in the database. Both ways are mixed for better performance and maintenance.

Managing Local and Dynamic database: 
Hybrid Approach: Incorporates a revalidate key in getStaticProps, allowing periodic content refresh while retaining the advantages of a static site.

Transaction & Consistency:
	To maintain Consistency transactions of Firebase were used:
Updating likes, liked problems, disliked problems, dislikes. Group multiple operations into a single transaction, either it is going to fail or succeed.


Trade-offs successfully planned:
User Experience vs. Load Time 
Security vs. Convenience(firebase)
I employ a mixed rendering approach for optimal results: static data is stored in a local server database and rendered using Static Site Generation (SSG) for faster page generation. Dynamic data, subject to frequent changes, is handled through Server-Side Rendering (SSR) using databases or Firestore, balancing maintainability and performance.

Solved hydration error:(Discussed in detail under architecture)
In the initial client-side run, the React app creates a mental model of the expected DOM, comparing it with existing nodes for integration. When rendering different content based on server-side rendering, it's a workaround. To avoid issues, introducing a state variable, hasMounted, initialized as false, helps. While false, it avoids rendering the "real" content. When useEffect triggers a re-render and sets hasMounted to true, the "real" content renders only after the component has mounted, aligning with React's expectations during hydration.
