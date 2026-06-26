import { useState } from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import "./ClearCache.css";

function ClearCache() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard-page">

      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="main-content">

        <Header onMenuClick={() => setIsOpen(true)} />

        <main className="cache-container">

          <section className="cache-title">

            <h1>🗑 Cache Management</h1>

          </section>

          {/* Cache Status */}

          <section className="cache-card status-card">

            <h2>ℹ️ Cache Status</h2>

            <div className="status-grid">

              <div>

                <label>Cache Type:</label>

                <span className="badge warning">
                  In-Memory Cache ⚠
                </span>

              </div>

              <div>

                <label>Redis Available:</label>

                <span className="badge danger">
                  No ✖
                </span>

              </div>

              <div>

                <label>Last Cleared:</label>

                <span className="text-value">
                  Never
                </span>

              </div>

              <div>

                <label>Current Time:</label>

                <span className="text-value">
                  2026-06-26 17:57:09
                </span>

              </div>

            </div>

          </section>

          {/* Warning */}

          <section className="cache-card warning-card">

            <h2>⚠ Clear Cache Warning</h2>

            <p>Clearing the cache will:</p>

            <ul>

              <li>Remove all server-side cached data</li>

              <li>Purge CDN cache for all pages</li>

              <li>Force fresh content delivery on next request</li>

              <li>
                Temporarily increase server load during content regeneration
              </li>

              <li>
                Reset all cached sitemaps, routes and API responses
              </li>

            </ul>

          </section>

          <button className="clear-cache-btn">
            🗑 Clear All Cache Now
          </button>

          <p className="cache-note">
            This will clear both server-side and CDN cache immediately.
          </p>
                    {/* What Gets Cleared */}

          <section className="cache-card success-card">

            <h2>✅ What Gets Cleared</h2>

            <ul>

              <li>
                <strong>Route Cache:</strong> All cached page renders
                (homepage, course pages, guides)
              </li>

              <li>
                <strong>API Cache:</strong> Cached API responses used to
                speed up requests
              </li>

              <li>
                <strong>Application Cache:</strong> Temporary application
                data stored in memory
              </li>

              <li>
                <strong>Configuration Cache:</strong> Cached configuration
                and settings
              </li>

              <li>
                <strong>View Cache:</strong> Compiled templates and rendered
                views
              </li>

            </ul>

          </section>

          {/* Performance */}

          <section className="cache-card info-card">

            <h2>📊 Cache Performance</h2>

            <div className="performance-grid">

              <div className="performance-item">

                <h3>Cache Type</h3>

                <p>In-Memory Storage</p>

              </div>

              <div className="performance-item">

                <h3>Redis Status</h3>

                <p>Unavailable</p>

              </div>

              <div className="performance-item">

                <h3>Estimated Clear Time</h3>

                <p>Less than 5 seconds</p>

              </div>

              <div className="performance-item">

                <h3>Application Status</h3>

                <p>Healthy</p>

              </div>

            </div>

          </section>

          {/* Safety */}

          <section className="cache-card safety-card">

            <h2>🛡 Safety Information</h2>

            <ul>

              <li>
                Clearing cache does <strong>not</strong> delete user data.
              </li>

              <li>
                Payments, users and news articles remain safe.
              </li>

              <li>
                The application will automatically rebuild caches when
                required.
              </li>

              <li>
                Temporary slow responses may occur immediately after
                clearing.
              </li>

            </ul>

          </section>

        </main>

      </div>

    </div>
  );
}

export default ClearCache;