const Element = (props) => {
    return (
        <section className="card card-featured-left card-featured-primary">
                <div className="card-body">
                    <div className="widget-summary">
                        <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-primary">
                                <i className="fas fa-life-ring"></i>
                            </div>
                        </div>
                        <div className="widget-summary-col">
                            <div className="summary">
                                <h4 className="title">Support Questions</h4>
                                <div className="info">
                                    <strong className="amount">1281</strong>
                                    <span className="text-primary">(14 unread)</span>
                                </div>
                            </div>
                            <div className="summary-footer">
                                <a className="text-muted text-uppercase" href="#">(view all)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Element;