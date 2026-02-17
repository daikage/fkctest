import Services from '../sections/Services.jsx'
import DiagonalMedia from '../components/DiagonalMedia.jsx'

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid cols-2" style={{ alignItems: 'center' }}>
            <DiagonalMedia
              src="https://plus.unsplash.com/premium_photo-1764911595372-608733d2f214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29tcHJlaGVuc2l2ZSUyMGJhY2tncm91bmQlMjBjaGVja3N8ZW58MHx8MHx8fDA%3D=crop"
              alt="Identity and credentials verification"
              height={320}
              direction="left"
              caption="Identity • Credentials • Sites • Records"
              imgProps={{ loading: 'eager', decoding: 'sync' }}
            />
            <div>
              <h2 style={{ marginBottom: 6 }}>Comprehensive background checks</h2>
              <p className="lead">
                From employment screening to vendor due diligence, we tailor checks to your risk profile and timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Human‑present verification imagery */}
      <section className="section alt">
        <div className="container">
          <div className="grid cols-3">
            <DiagonalMedia
              src="https://images.unsplash.com/photo-1554224155-cfa08c2a758f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW4lRTIlODAlOTFwZXJzb24lMjBJRCUyMCUyNiUyMGRvY3VtZW50JTIwY2hlY2t8ZW58MHx8MHx8fDA%3D=crop"
              alt="Professional conducting an ID and document check with an African candidate present"
              height={260}
              direction="right"
              caption="In‑person ID & document check"
            />
            <DiagonalMedia
              src="https://plus.unsplash.com/premium_photo-1683122050553-ed1559c7a3c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop"
              alt="HR discussion with an African professional during background screening"
              height={260}
              direction="left"
              caption="HR background interview"
              imgProps={{ loading: 'lazy', decoding: 'async' }}
            />
            <DiagonalMedia
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop"
              alt="On‑site vendor assessment with an African team member present"
              height={260}
              direction="right"
              caption="On‑site vendor assessment"
              imgProps={{ loading: 'lazy', decoding: 'async' }}
            />
          </div>
        </div>
      </section>

      <Services />
    </>
  )
}