import {Container, Row} from "react-bootstrap"
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer"

const ResumePage = () => {
    const docs = [{ uri: require('../assets/docs/resume.pdf') }]
    return (
        <Container>
            <Row>
                <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
            </Row>
        </Container>
    )
}

export default ResumePage