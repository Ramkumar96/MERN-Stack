import React, { Component } from 'react'

 class Menu extends Component {
    render() {
        return (
    <div>
        <div className="row">
        {/*Left Col 01*/}
          <div className="col-lg-4">           
            <div className="card card-widget widget-user">
                {/* Add the bg color to the header using any of the bg-* classes */}
                <div className="widget-user-header bg-info">
                <h3 className="widget-user-username">Ram kumar</h3>
                <h5 className="widget-user-desc">Nurse</h5>
                </div>
                <div className="widget-user-image">
                <img className="img-circle elevation-2" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                </div>

                <div className="card-footer">
                {/*row starts*/}
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
                <hr />
                <div className="row center">
                    <div className="description-block center">
                        <h5 className="description-header center">08</h5>
                        <span className="description-text center">Recommendations</span>
                    </div>
                </div>
                <div className="row center border-bottom">
                    <div className="description-block center">
                      <p>
                          efdf
                          dfdf
                          Founderdf
                          d
                          gfdf
                          Founderdfdf

                          sdx

                      </p>
                    </div>
                </div>
                {/* /.row */}
            </div>
            </div>
            {/* /.widget-user */}
            </div> 
        {/*Left Col 01 End */}

        {/*Left Col 02 Start*/}
            <div classname="col-lg-10">
                {/* left column */}
                {/* general form elements */}
                <div className="card card-primary">
                    <div className="card-header">
                    <h3 className="card-title">Personnel Details</h3>
                    </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form role="form">
                    <div className="card-body">
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputFile">File input</label>
                        <div className="input-group">
                            <div className="custom-file">
                            <input type="file" className="custom-file-input" id="exampleInputFile" />
                            <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                            </div>
                            <div className="input-group-append">
                            <span className="input-group-text" id>Upload</span>
                            </div>
                        </div>
                        </div>
                        <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    </form>
                {/* /.card */}
                </div>
            </div> 
         {/*Left Col 02 End*/}

        {/*Left Col 03 Start*/} 

                <p>hey ram</p>



        {/*Left Col 03 End*/} 
        </div>
        {/*Row End*/} 



    </div>

  );
    }
}

export default Menu;
