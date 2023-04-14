export const getData = (req, res) => {
    res.status(200).json({ success: true, result: 'Hello backend' })
    console.log("response")
}