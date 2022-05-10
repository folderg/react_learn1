const Element = (props) => {
    return (
        <section className="card card-featured-left card-featured-secondary">
                <div className="card-body">
                    <div className="widget-summary">
                        <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-secondary">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                        </div>
                        <div className="widget-summary-col">
                            <div className="summary">
                                <h4 className="title">Total Profit</h4>
                                <div className="info">
                                    <strong className="amount">$ {Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(props.value)}</strong>
                                </div>
                            </div>
                            <div className="summary-footer">
                                <a className="text-muted text-uppercase" href="#">(withdraw)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Element;