import { useState } from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";
import "./NewsManagement.css";

const stats = [
  {
    title: "Total Articles",
    value: 0,
    color: "#2563eb",
  },
  {
    title: "Published",
    value: 0,
    color: "#15803d",
  },
  {
    title: "Featured",
    value: 0,
    color: "#f59e0b",
  },
  {
    title: "Drafts",
    value: 0,
    color: "#06b6d4",
  },
];

function NewsManagement() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard-page">

      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="main-content">

        <Header onMenuClick={() => setIsOpen(true)} />

        <main className="news-container">

          <section className="news-header">

            <div>

              <h1>
                📰 News Management
              </h1>

            </div>

            <button className="create-news-btn">
              ➕ Create New Article
            </button>

          </section>

          <section className="news-stats">

            {stats.map((item) => (

              <div
                key={item.title}
                className="news-stat-card"
                style={{ background: item.color }}
              >

                <h3>{item.title}</h3>

                <h2>{item.value}</h2>

              </div>

            ))}

          </section>

          <section className="articles-card">

            <div className="articles-header">

              <h2>All News Articles</h2>

            </div>

            <div className="empty-news">

              <div className="empty-icon">
                📰
              </div>

              <h2>No news articles yet</h2>

              <p>
                Create your first news article to get started.
              </p>

              <button className="create-first-btn">
                ➕ Create First Article
              </button>

            </div>

          </section>

        </main>

        <Footer />

      </div>

    </div>
  );
}

export default NewsManagement;