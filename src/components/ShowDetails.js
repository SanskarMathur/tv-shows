import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ShowDetails() {
  const [show, setShow] = useState(null);
  const { showId } = useParams();

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
        setShow(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShowDetails();
  }, [showId]);

  if (!show) {
    return <div className='loading'>Loading...</div>;
  }

  const summary = (show.summary) && show.summary.replace("<p>", "")
                                    .replace("</p>", "")
                                    .replace("<b>", "")
                                    .replace("</b>", "")
                                    .replace("<br />", "")
                                    .replace("<br>", "")

  return (
    <div className='ShowDetails'>
      <img src={show.image? show.image.original : "https://img.icons8.com/plasticine/100/no-image.png"} className='ShowDetails-img' />
      <div className='ShowDetails-text'>
        <h1 className='ShowDetails-name'>{show.name}</h1>
        <Link to={`/booking/${showId}`} className="btn">Book Tickets</Link>
        <div className='genres'>{show.genres.join(' | ')}</div>
        <section className='info-container'>
          <div className='rating col1'>Rating:</div>
          <div className='rating col2'>{show.rating.average? show.rating.average:"N/A"}</div>

          <div className='language col1'>Language:</div>
          <div className='language col2'>{show.language? show.language:"N/A"}</div>

          <div className='status col1'>Status:</div>
          <div className='status col2'>{show.status? show.status:"N/A"}</div>

          <div className='runtime col1'>RunTime:</div>
          <div className='runtime col2'>{show.runtime? `${show.runtime}m`:"N/A"}</div>

          <div className='release col1'>Release:</div>
          <div className='release col2'>{show.premiered? show.premiered:"N/A"}</div>

          <div className='summary col1'>Summary:</div>
          <div className='summary col2'>{summary? summary:"N/A"}</div>
        </section>
      </div>
    </div>
  );
}

export default ShowDetails;
