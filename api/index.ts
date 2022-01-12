import updateInfo from '../update'
export default async (req, res) => {
  const { addon } = req.query
  res.status(200).json(
    addon && addon in updateInfo && updateInfo[addon].length
      ? updateInfo[addon][0]
      : {
          tips: '不存在该插件，可以在 https://github.com/mnaddon/update-reminder 提交'
        }
  )
}
