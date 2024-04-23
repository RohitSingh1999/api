import React, { useEffect, useState } from 'react';
import Heading from '../../../Common/Heading';
import FooterHeader from '../../../Common/FooterCommon/FooterHeader';
import './Webstories.css';

const Webstories = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const itemsPerPage = 10;

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await fetch(`https://aeroway.one/wp-json/web-stories/v1/web-story?page=${activePage}`);
                const data = await response.json();
                setStories(data);
                setTotalPages(3); // Assuming total pages as 3 (adjust as needed)
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                setError(error.message);
                setLoading(false); // Set loading to false on error
                console.error('Error fetching stories:', error);
            }
        };

        fetchStories();
    }, [activePage]);

    const handlePageClick = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const handleNextPage = () => {
        if (activePage < totalPages) {
            setActivePage(activePage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1);
        }
    };

    return (
        <>
            <div className="web-stories-container">
                <span className="text-h3 font-bold font-poppins">
                    <Heading HeadingText="Web Stories" />
                </span>

                {error && <p className="error-message">{error}</p>}

                {loading ? (
                    <div className="loader-container">
                        {/* Display loader while loading */}
                        <img src="https://s3.amazonaws.com/wmh.all.posts/static_images/loader.svg" alt="loader" className="loader h-[200px] w-[200px]" />
                    </div>
                ) : (
                    <div className="web-stories-grid">
                        {stories.length > 0 ? (
                            stories.slice(0, itemsPerPage).map((story) => (
                                <article key={story.id} className="story-card">
                                    <a href={story.link} target="_self" rel="noopener noreferrer">
                                        <img
                                            className="story-image"
                                            src={story.story_poster.url}
                                            alt={story.title.rendered}
                                            onLoad={() => setLoading(false)} // Set loading to false once image is loaded
                                        />
                                    </a>
                                </article>
                            ))
                        ) : (
                            <p className="no-stories">No stories found.</p>
                        )}
                    </div>
                )}

                <div className="text-center mt-7 mb-7">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px text-base h-10">
                            <li>
                                <button
                                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-white border-2 border-purple rounded-l-lg text-white"
                                    onClick={handlePreviousPage}
                                    disabled={activePage === 1} // Disable when on first page
                                >
                                    Previous
                                </button>
                            </li>
                            {[...Array(totalPages)].map((_, pageNumber) => (
                                <li key={pageNumber + 1}>
                                    <button
                                        className={`flex items-center justify-center px-4 h-10 leading-tight ${pageNumber + 1 === activePage ? 'text-white bg-purple' : 'text-white'
                                            } border-2 border-purple`}
                                        onClick={() => handlePageClick(pageNumber + 1)}
                                    >
                                        {pageNumber + 1}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border-2 border-purple rounded-r-lg hover:text-pink-600 text-white"
                                    onClick={handleNextPage}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <FooterHeader />



        </>
    );
};

export default Webstories;
