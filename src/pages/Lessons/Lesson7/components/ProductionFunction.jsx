/**
 * ProductionFunction.jsx - Introduction Component for Lesson 7
 * Describes the core concepts of Production Function, Fixed vs Variable Factors, and Time Periods.
 */

import React from 'react';
import { FaIndustry, FaClock, FaCubes } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

function ProductionFunction() {
  return (
    <section className="lesson-container-modern animate-fade-in">
      {/* Section Header */}
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 7</span>
        <h2 className="section-title-lesson">Production Function & Returns to a Factor</h2>
        <p className="section-subtitle-lesson">Understanding the input-output relationship in economics</p>
      </div>

      {/* 1. Deep Dive: What is Production Function? */}
      <div className="lesson-section-wrapper">
        <h3 className="section-title-modern"><FaIndustry /> Concept of Production Function</h3>
        <div className="definition-quote-box">
          <p className="definition-text">
            <strong>Production Function</strong> is the functional relationship between physical inputs (factors of production like labor, capital) and physical output of a good.
          </p>
          <p className="definition-subtext mt-3">
            It is a purely <em>technical</em> relation, not an economic one (it doesn't deal with prices or profits yet). It tells us the <strong>maximum output</strong> that can be produced with a given set of inputs and technology.
          </p>
        </div>

        <div className="formula-box mt-4">
          <h4 className="text-gold mb-2">Mathematical Expression:</h4>
          <code className="text-2xl">Qₓ = f(L, K)</code>
          <ul className="mt-3 text-sm text-gray-400 space-y-1">
            <li><strong>Qₓ</strong> = Physical quantity of output of commodity X</li>
            <li><strong>f</strong> = Functional relationship</li>
            <li><strong>L</strong> = Units of Labor (Variable Factor)</li>
            <li><strong>K</strong> = Units of Capital (Fixed Factor)</li>
          </ul>
        </div>
      </div>

      {/* 2. Fixed vs Variable Factors */}
      <div className="lesson-section-wrapper">
        <h3 className="section-title-modern"><FaCubes /> Factors of Production</h3>
        <p className="mb-6 text-lg text-gray-300">
          To produce goods, a firm needs inputs. In the short run, we classify these inputs into two categories based on their adjustability.
        </p>

        <div className="assumptions-grid-modern">
          <div className="stage-card-modern no-margin-top auto-height">
            <h4 className="text-xl font-bold text-green-400 mb-3">Variable Factors</h4>
            <p className="text-sm mb-4">Inputs that <strong>can be changed</strong> in the short run to change the level of output.</p>
            <ul className="modern-list check-list text-left">
              <li>Raw materials</li>
              <li>Casual labor</li>
              <li>Power and fuel</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Output is zero if variable factors are zero.</p>
          </div>

          <div className="stage-card-modern no-margin-top auto-height">
            <h4 className="text-xl font-bold text-gold mb-3">Fixed Factors</h4>
            <p className="text-sm mb-4">Inputs that <strong>cannot be changed</strong> in the short run. They remain constant regardless of output.</p>
            <ul className="modern-list dot-list text-left">
              <li>Land & Building</li>
              <li>Machinery & Plant</li>
              <li>Permanent staff</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">Costs are incurred even if output is zero.</p>
          </div>
        </div>
      </div>

      {/* 3. Short Run vs Long Run */}
      <div className="lesson-section-wrapper">
        <h3 className="section-title-modern"><FaClock /> Time Periods in Production</h3>
        <p className="mb-4 text-gray-300">
          In economics, the distinction between short run and long run isn't about days or years, but about the flexibility of factors.
        </p>

        <div className="comparison-table-wrapper rounded-xl overflow-hidden border border-white/10">
          <table className="production-table-modern">
            <thead>
              <tr>
                <th className="w-1/3">Basis</th>
                <th className="w-1/3 text-green-400">Short Run</th>
                <th className="w-1/3 text-gold">Long Run</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">Definition</td>
                <td>Period where at least one factor is fixed.</td>
                <td>Period where all factors are variable.</td>
              </tr>
              <tr>
                <td className="font-bold">Factor Classification</td>
                <td>Factors are Fixed vs Variable.</td>
                <td>All factors are Variable.</td>
              </tr>
              <tr>
                <td className="font-bold">Output Change</td>
                <td>Output changed by varying variable inputs only.</td>
                <td>Output changed by varying scale (all inputs).</td>
              </tr>
              <tr>
                <td className="font-bold">Relevant Law</td>
                <td><strong>Returns to a Factor</strong> (Law of Variable Proportions).</td>
                <td><strong>Returns to Scale</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Navigation Hint */}
      <div className="section-navigation">
        <div className="nav-hint">
          Next Section: Production Schedule &rsaquo;
        </div>
      </div>

    </section>
  );
}

export default ProductionFunction;
