import {Container, Row} from "react-bootstrap"
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer"

import '../assets/style/resume-page.css'

const ResumePage = () => {
    const docs = [{ uri: require('../assets/docs/resume.pdf') }]
    return (
        <div className="resume-page">
            <Container>
                <Row>
                    <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
                </Row>
            </Container>
        </div>
    )
}

export default ResumePage