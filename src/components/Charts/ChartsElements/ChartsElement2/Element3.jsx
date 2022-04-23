const Element = (props) => {
    return (
        <section className="card card-featured-left card-featured-tertiary">
                <div className="card-body">
                    <div className="widget-summary">
                        <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-tertiary">
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                        </div>
                        <div className="widget-summary-col">
                            <div className="summary">
                                <h4 className="title">Today's Orders</h4>
                                <div className="info">
                                    <strong className="amount">38</strong>
                                </div>
                            </div>
                            <div className="summary-footer">
                                <a className="text-muted text-uppercase" href="#">(statement)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Element;