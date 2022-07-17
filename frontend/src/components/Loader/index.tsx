import React, { Fragment } from 'react'
import ContentLoader from 'react-content-loader'

function Loader() {
    return (
        <div>
            <ContentLoader
                speed={2}
                width={830}
                height={300}
                viewBox="0 0 830 300"
                backgroundColor="#314256"
                foregroundColor="#253241"
            >
                <rect x="1" y="14" rx="3" ry="3" width="750" height="10" />
                <circle cx="800" cy="17" r="12" />
                <rect x="1" y="47" rx="3" ry="3" width="750" height="10" />
                <circle cx="800" cy="50" r="12" />
                <rect x="2" y="80" rx="3" ry="3" width="750" height="10" />
                <circle cx="800" cy="83" r="12" />
                <rect x="2" y="113" rx="3" ry="3" width="750" height="10" />
                <circle cx="800" cy="116" r="12" />
                <rect x="2" y="145" rx="3" ry="3" width="750" height="10" />
                <circle cx="800" cy="148" r="12" />
                <rect x="2" y="178" rx="3" ry="3" width="750" height="10" />
                <circle cx="800" cy="181" r="12" />
                <rect x="3" y="211" rx="3" ry="3" width="750" height="10" />
                <circle cx="800" cy="214" r="12" />
                <rect x="3" y="244" rx="3" ry="3" width="750" height="10" />
                <circle cx="800" cy="247" r="12" />
            </ContentLoader>
        </div>
    )
}



export default Loader;