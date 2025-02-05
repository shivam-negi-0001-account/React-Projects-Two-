import axios from 'axios'
import Layout from '../layout/Layout'
import Menu from './Menu'
import { useEffect, useState } from 'react'

export default function AllStudent() {
  const [id, setId] = useState()
  const [records, setRecords] = useState([])
  const [name, setName] = useState()
  const [course, setCourse] = useState()
  const [fees, setFees] = useState()

  const [currentPage , setCurrentPage] = useState(1)
  const [record , setRecord] = useState()
  const recordsPerPage = 3;
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;
const data = records.slice(firstIndex ,lastIndex
 const nPages =  Math.ceil(records.length/recordsPerPage)
)

  const getId = async (id) => {
    try {
      console.log(id);
      setId(id)
      const { data } = await axios.get(`http://localhost:3000/student/${id}`)
      console.log(data);
      setName(data?.name)
      setCourse(data?.course)
      setFees(data?.fees)

    } catch (error) {
      console.log(error);

    }
  }
  async function getStudent() {

    try {
      setRecords(data)
      const { data } = await axios.get(`http://localhost:3000/student`)
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getStudent()
  }, [])


  const handleUpdate = async (e) => {
    e.preventDefault()

    try {
      await axios.put(`http://localhost:3000/student/${id}`, {
        name: name,
        course: course,
        fees: fees
      })
      getStudent()
    } catch (error) {
      console.log(error);

    }
  }






  return (
    <Layout>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel fs-5 fw-bold text-center">Edit Student Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">

              <form action="#">
                <div className="form-group">
                  <label htmlFor="#" className='form-label fs-4 fw-bold'>Name</label>
                  <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                  <label htmlFor="#" className='form-label  fs-4 fw-bold'>Course</label>
                  <input type="text" className='form-control' value={course} onChange={(e) => setCourse(e.target.value)} />
                </div>

                <div className="form-group">
                  <label htmlFor="#" className='form-label  fs-4 fw-bold'>Fees</label>
                  <input type="text" className='form-control' value={fees} onChange={(e) => setFees(e.target.value)} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>UpDate</button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL END */}

      {/* Modal 2 */}
      <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel fs-5 fw-bold text-center">Edit Student Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">

            </div>
          </div>
        </div>
      </div>

      {/* MODAL END */}

      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-4">
            <Menu></Menu>
          </div>
          <div className="col-md-9 mt-5">
            <table class="table table-bordered w-50">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">course</th>
                  <th scope="col">fees</th>
                  <th scope="col">Handle</th>
                </tr>

                {
                  records.map((stud) =>
                    <tr key={stud}>
                      <th scope="row">{stud?.id}</th>
                      <td colspan="2">{stud?.name}</td>
                      <td colspan="2">{stud?.course}</td>
                      <td colspan="2">{stud?.fees}</td>

                      <td>
                        <a type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getId(stud.id)}>
                          Edit
                        </a>

                        <a type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => getId(stud.id)}>
                          View
                        </a>

                      </td>
                    </tr>

                  )
                }
              </thead>
            </table>
          </div>
        </div>

      </div>
    </Layout>
  )
}
