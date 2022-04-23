
const Element = (props) => {
    return (
        <section className="card card-featured-left card-featured-quaternary">
                <div className="card-body">
                    <div className="widget-summary">
                        <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-quaternary">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <div className="widget-summary-col">
                            <div className="summary">
                                <h4 className="title">Today's Visitors</h4>
                                <div className="info">
                                    <strong className="amount">3765</strong>
                                </div>
                            </div>
                            <div className="summary-footer">
                                <a className="text-muted text-uppercase" href="#">(report)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Element;