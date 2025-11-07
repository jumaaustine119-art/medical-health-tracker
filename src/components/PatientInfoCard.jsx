
import React from 'react'


export default function PatientInfoCard({ patient }) {
return (
<div className="card flex items-center gap-6">
<img src={patient.avatar} alt="avatar" className="avatar" />
<div>
<h2 className="text-2xl font-bold">{patient.name}</h2>
<div className="text-sm text-slate-600">Age: {patient.age} years</div>
<div className="text-sm text-slate-600">Sex: {patient.sex}</div>
</div>
</div>
)
}
