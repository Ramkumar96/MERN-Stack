import React, { Component } from 'react'

 class Menu extends Component {
    render() {
        return (
             <div>

          <div className="col-lg-4">           
            <div className="card card-widget widget-user">
                {/* Add the bg color to the header using any of the bg-* classes */}
                <div className="widget-user-header bg-info">
                <h3 className="widget-user-username">Alexander Pierce</h3>
                <h5 className="widget-user-desc">Founder &amp; CEO</h5>
                </div>
                <div className="widget-user-image">
                <img className="img-circle elevation-2" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                </div>
                <div className="card-footer">
                <div className="row">
                    <div className="col-sm-4 border-right">
                    <div className="description-block">
                        <h5 className="description-header">3,200</h5>
                        <span className="description-text">SALES</span>
                    </div>
                    {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-4 border-right">
                    <div className="description-block">
                        <h5 className="description-header">13,000</h5>
                        <span className="description-text">FOLLOWERS</span>
                    </div>
                    {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-4">
                    <div className="description-block">
                        <h5 className="description-header">35</h5>
                        <span className="description-text">PRODUCTS</span>
                    </div>
                    {/* /.description-block */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
                </div>
            </div>
            {/* /.widget-user */}
            </div>      
  </div>
  );
    }
}
export default Menu;
