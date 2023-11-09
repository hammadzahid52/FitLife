import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { useExercisesData } from "../contexts/ExercisesDataContext"



import Detail from "../components/Detail"

import SimilarExercises from "../components/SimilarExercises"

const ExerciseDetail = () => {
  const { id } = useParams()
  const { exercises, searchedExercises } = useExercisesData()

  const [exerciseDetail, setExerciseDetail] = useState([])
  

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  useEffect(() => {
    const getExercisesDetail = async () => {
      const exerciseDetailData = searchedExercises.filter((exercise) => exercise.id === id)
      setExerciseDetail(exerciseDetailData[0])

      

      const targetMuscleExercisesData = exercises.filter(
        (exercise) => exercise.target.toLowerCase() === exerciseDetailData[0].target.toLowerCase()
      )
      setTargetMuscleExercises(targetMuscleExercisesData)

      const equipmentExercisesData = exercises.filter(
        (exercise) => exercise.equipment.toLowerCase() === exerciseDetailData[0].equipment.toLowerCase()
      )
      setEquipmentExercises(equipmentExercisesData)
    }

    getExercisesDetail()
    //
  }, [id])

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </div>
  )
}

export default ExerciseDetail
