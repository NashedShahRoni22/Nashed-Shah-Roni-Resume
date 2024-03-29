import React from 'react';

const DetailsModal = ({details}) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input
                type="checkbox"
                id="detaillsModal"
                className="modal-toggle"
              />
              <label htmlFor="detaillsModal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <h3 className="text-lg font-bold">{details.name}</h3>
                  <p className="py-4">
                    You've been selected for a chance to get one year of
                    subscription to use Wikipedia for free!
                  </p>
                </label>
              </label>
        </div>
    );
};

export default DetailsModal;