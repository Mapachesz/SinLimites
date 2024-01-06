import React from 'react';

function Comollegar() {
    const h1Us = {
        color: "#5C6BC0",
    };

    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-12 text-center mt-5 mb-5">
                    <h1 style={h1Us} className="h1">
                        COMO LLEGAR
                    </h1>
                </div>
            </div>
            <div className="container mb-5">
                < div dangerouslySetInnerHTML={{
                    __html: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3316.79497807062!2d-71.29128772429586!3d-33.76596347326602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ1JzU3LjUiUyA3McKwMTcnMTkuNCJX!5e0!3m2!1ses!2scl!4v1702602098820!5m2!1ses!2scl"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>`
                }
                } />

            </div>

        </>
    );
}


export default Comollegar;
